import axios from "axios";
import "./chart.css";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import { Component } from "react";

const api = axios.create({
  baseURL: 'https://demo.ghost.io/ghost/api/v3/content/'
})

export default class Chart extends Component {
  state = {
    posts: []
  }

  constructor() {
    super();
    api.get('posts/?key=22444f78447824223cefc48062').then(res => {
      console.log(res.data);
      this.setState({ posts: res.data.posts })

    })
  }

  render() {

    var graphData = {
      1: {
        name: "Jan",
        count: 0,
      },
      2: {
        name: "Fab",
        count: 0,
      },
      3: {
        name: "Mar",
        count: 0,
      },
      4: {
        name: "Apr",
        count: 0,
      },
      5: {
        name: "May",
        count: 0,
      },
      6: {
        name: "Jun",
        count: 0,
      },
      7: {
        name: "Jul",
        count: 0,
      },
      8: {
        name: "Aug",
        count: 0,
      },
      9: {
        name: "Sep",
        count: 0,
      },
      10: {
        name: "Oct",
        count: 0,
      },
      11: {
        name: "Nov",
        count: 0,
      },
      12: {
        name: "Dec",
        count: 0,
      }

    };

    function dateToMonth(params) {
      var dateArray = [];
      dateArray = parseInt(params.slice(5, 7));
      return (dateArray);
    }

    for (var i = 0; i < ((this.state.posts).length); i++) {
      graphData[dateToMonth(this.state.posts[i].created_at)].count++;
    }
    console.log(graphData);


    var userData = [];
    for (var m in graphData) {
      userData.push(graphData[m]);
    }


    return (
      <div className="chart">
        <h3 className="chartTitle">Posts per month Chart</h3>
        <ResponsiveContainer width="100%" aspect={3 / 1}>
          <BarChart data={userData}>
            <XAxis dataKey="name" stroke="#808080" />
            <YAxis dataKey="count" stroke="#808080" />
            <Bar type="monotone" dataKey={"count"} fill="#BFE0F7" stroke="#5FABE9" />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
