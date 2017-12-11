import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DATA from './data'

class Dashboard extends Component {
    onSignOut = () => {
        this.props.authFail()
        this.props.history.push("/")
    }

    renderModule = (module) => {
        switch (module) {
            case "system":
                return <div />

            default:
                return <div />
        }
    }

    render() {
        const { match } = this.props
        return (
            <div>
                this is dashboard !!
                <button onClick={this.onSignOut.bind(this)}>Sign out</button>
                <hr />
                <div>
                    <div className="ui-g">
                        <div className="ui-g-2">
                            {
                                DATA.modules.map((module, i) => {
                                    return (
                                        <div key={i}>
                                            <h4>{module.title}</h4>
                                            <nav>
                                                <ul>
                                                    {
                                                        module.menu.map((item, i) => {
                                                            // const addUrl = "/m/" + module.name + "/" + item.link + "/add"
                                                            const listUrl = "/m/" + module.name + "/" + item.link
                                                            return (
                                                                <li key={i}>
                                                                    <Link to={listUrl}>{item.title}</Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </nav>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="ui-g-10">
                            {
                                this.renderModule(match.params.menu)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard