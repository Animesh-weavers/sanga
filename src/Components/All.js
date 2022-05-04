import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const All = () => {
  const [data, setData] = useState([
    {
      id: 0,
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      title: "Lorem Ipsum Dolor...",
      relaseTime: "10:30am",
      releaseDate: "25th Aug,2019",
      author: "John Williams",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      title: "Lorem  Dolor...",
      relaseTime: "10:40am",
      releaseDate: "22th Aug,2021",
      author: "Jonny Williams",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      title: "Lorem Ipsum...",
      relaseTime: "10:00am",
      releaseDate: "21th Aug,2020",
      author: "Joh Williams",
    },
  ]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>ALL</h1>
      <div>
        {data?.map((item, index) => (
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.relaseTime}</Card.Text>
              <Card.Text>{item.releaseDate}</Card.Text>
              <Card.Text>{item.author}</Card.Text>
              <div>
                <Link
                  to={`/${item.id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Button style={{ margin: "1rem" }}>Details</Button>
                </Link>

                <Link
                  to={`/${item.id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Button style={{ margin: "1rem" }}>Details</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default All;
