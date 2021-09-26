import React, { Component } from 'react'
import "./dashboard.css"
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://demo.ghost.io/ghost/api/v3/content/'
})
export default class Dashboard extends Component {


    state = {
        posts: [],
        pages: [],
        authors: [],
        tags: []
    }
    constructor() {
        super();
        api.get('posts/?key=22444f78447824223cefc48062').then(res => {
            // console.log(res.data);
            this.setState({ posts: res.data.posts })
        })

        api.get('pages/?key=22444f78447824223cefc48062').then(res => {
            // console.log(res.data);
            this.setState({ pages: res.data.pages })
        })

        api.get('authors/?key=22444f78447824223cefc48062').then(res => {
            // console.log(res.data);
            this.setState({ authors: res.data.authors })
        })

        api.get('tags/?key=22444f78447824223cefc48062').then(res => {
            // console.log(res.data);
            this.setState({ tags: res.data.tags })
        })


    }



    render() {
        return (
            <div>
                <div className="dashboard">
                    <div className="dashboardItems">
                        <span className="dashboardTitle">NO OF POSTS</span>
                        <div className="dashboardContainer">
                            <span className="dashboardPost">{this.state.posts.length}</span>
                        </div>
                        <div>
                            <span className="dashboardPostNo">updated</span>

                        </div>
                    </div>
                    <div className="dashboardItems">
                        <span className="dashboardTitle">NO OF Pages</span>
                        <div className="dashboardContainer">
                            <span className="dashboardPost">{this.state.pages.length}</span>
                        </div>
                        <div>
                            <span className="dashboardPostNo">updated</span>

                        </div>
                    </div>
                    <div className="dashboardItems">
                        <span className="dashboardTitle">NO OF Authors</span>
                        <div className="dashboardContainer">
                            <span className="dashboardPost">{this.state.authors.length}</span>
                        </div>
                        <div>
                            <span className="dashboardPostNo">updated</span>

                        </div>
                    </div>
                    <div className="dashboardItems">
                        <span className="dashboardTitle">NO OF Tags</span>
                        <div className="dashboardContainer">
                            <span className="dashboardPost">{this.state.tags.length}</span>
                        </div>
                        <div>
                            <span className="dashboardPostNo">updated</span>

                        </div>
                    </div>
                </div>



                <div className="dashboard postsList">
                    <div className="dashboardItems">
                        <span className="dashboardTitle">Latest 5 Published posts List</span>
                        <div className="dashboardContainer">
                            <span className="dashboardPost">
                                <ol className="topFivePost">
                                    {this.state.posts.slice(0, 5).map(post => <p key={post.id} style={{ color: "grey", fontSize: "18px" }}><li>{post.title}</li></p>)}
                                </ol>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
