import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LineChart from "../Linechart";
import { UserData } from "../Data";
import Table from "react-bootstrap/Table";

function Home() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row style={{ fontSize: "10.2px" }}>
            <Col xs={1} className="home-header">
              <Row>
                <h6>WAVES/USD</h6>
              </Row>
              <Row>
                <h6>Perpetual</h6>
              </Row>
            </Col>
            <Col xs={1}>
              <h6 style={{ color: "#2BBDB5" }}>421045.7</h6>
            </Col>

            <Col xs={1} style={{ paddingBottom: 20 }}>
              <Row style={{ color: " #777E91" }}>Mark</Row>
              <Row>41,985.5</Row>
            </Col>
            <Col xs={1} style={{ paddingBottom: 20 }}>
              <Row style={{ color: " #777E91" }}>Index</Row>
              <Row>41,754,2</Row>
            </Col>
            <Col xs={1} style={{ paddingBottom: 20 }}>
              <Row style={{ color: " #777E91" }}>Funding/Countdown</Row>
              <Row>0.0100% 03:52:12</Row>
            </Col>
            <Col xs={1} style={{ paddingBottom: 20 }}>
              <Row style={{ color: " #777E91" }}>24h change</Row>
              <Row style={{ color: "#EF3E9E" }}>520.80 +1.25%</Row>
            </Col>
            <Col xs={1} style={{ paddingBottom: 20 }}>
              <Row style={{ color: " #777E91" }}>24h high</Row>
              <Row>520.80 +1.25%</Row>
            </Col>
            <Col xs={1} style={{ paddingBottom: 20 }}>
              <Row style={{ color: " #777E91" }}>25h low</Row>
              <Row>520.80 +1.25%</Row>
            </Col>
            <Col xs={1} style={{ paddingBottom: 20 }}>
              <Row style={{ color: " #777E91" }}>24h volume</Row>
              <Row>75.655.26</Row>
            </Col>
            <Col xs={1} style={{ paddingBottom: 20 }}>
              <Row style={{ color: " #777E91" }}>Mark</Row>
              <Row>41,985.5</Row>
            </Col>
            <Col xs={1} style={{ paddingBottom: 20 }}>
              <Row style={{ color: " #777E91" }}>Mark</Row>
              <Row>41,985.5</Row>
            </Col>
            <Col xs={1} style={{ paddingBottom: 20 }}>
              <Row style={{ color: " #777E91" }}>Mark</Row>
              <Row>41,985.5</Row>
            </Col>
          </Row>
        </Container>
        <Container>
          <Col>
            <Row>
              <Col>Time</Col>
              <Col>15m</Col>
              <Col>1H</Col>
              <Col>4H</Col>
              <Col>
                <Button
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#23262F",
                    border: "none",
                  }}
                >
                  1D
                </Button>
              </Col>
              <Col>W</Col>
              <Col>
                <Button
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#23262F",
                    border: "none",
                  }}
                >
                  Active
                </Button>
              </Col>
              <Col>Default</Col>
            </Row>
            <Row>
              <Col>
                <div style={{ width: 700 }}>
                  <LineChart chartData={userData} />
                </div>
              </Col>
              <Col md={3}>
                <div style={{ color: "#B1B5C4", margin: "10px" }}>
                  <Row>36,400.00</Row>
                  <Row>36,400.00</Row>
                  <Row>36,400.00</Row>
                  <Row>36,400.00</Row>
                  <Row
                    style={{ background: "#EF3E9E", borderRadius: "2.34225px" }}
                  >
                    36,400.00
                  </Row>
                  <Row>36,400.00</Row>
                  <Row>36,400.00</Row>

                  <Row>120</Row>
                  <Row>80</Row>
                  <Row>40</Row>
                  <Row>0</Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col style={{ paddingTop: "62px" }}>
            <Row>
              {" "}
              <Col style={{ color: "white" }}>Market Trades</Col>
              <Col style={{ color: "white" }}>Open Orders </Col>
              <Col>Order History </Col>
              <Col>Order Book </Col>
            </Row>
          </Col>
          <Table
            style={{ fontSize: "12px", marginTop: "20px" }}
            striped="columns"
          >
            <thead>
              <tr>
                <th>Time</th>
                <th>Price (ETH)</th>
                <th>Amount (BTC)</th>
                <th>Total (ETH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: "white", border: "none" }}>12:34:44</td>
                <td style={{ color: "#2BBDB5", border: "none" }}>
                  243546.12443536
                </td>
                <td style={{ color: "white", border: "none" }}>
                  12425.21435364
                </td>
                <td style={{ color: "white", border: "none" }}>
                  12425.21435364
                </td>
              </tr>
              <tr>
                <td style={{ color: "white", border: "none" }}>12:34:44</td>
                <td style={{ color: "#EF3E9E", border: "none" }}>
                  243546.12443536
                </td>
                <td style={{ color: "white", border: "none" }}>
                  12425.21435364
                </td>
                <td style={{ color: "white", border: "none" }}>
                  12425.21435364
                </td>
              </tr>
              <tr>
                <td style={{ color: "white", border: "none" }}>12:34:44</td>
                <td style={{ color: "#EF3E9E", border: "none" }}>
                  {" "}
                  243546.12443536
                </td>
                <td style={{ color: "white", border: "none" }}>
                  12425.21435364
                </td>
                <td style={{ color: "white", border: "none" }}>
                  12425.21435364
                </td>
              </tr>
              <tr>
                <td style={{ color: "white", border: "none" }}>12:34:44</td>
                <td style={{ color: "#2BBDB5", border: "none" }}>
                  {" "}
                  243546.12443536
                </td>
                <td style={{ color: "white", border: "none" }}>
                  12425.21435364
                </td>
                <td style={{ color: "white", border: "none" }}>
                  12425.21435364
                </td>
              </tr>
              <tr>
                <td style={{ color: "white", border: "none" }}>12:34:44</td>
                <td style={{ color: "#2BBDB5", border: "none" }}>
                  {" "}
                  243546.12443536
                </td>
                <td style={{ color: "white", border: "none" }}>
                  12425.21435364
                </td>
                <td style={{ color: "white", border: "none" }}>
                  12425.21435364
                </td>
              </tr>
              <tr>
                <td style={{ color: "white", border: "none" }}>12:34:44</td>
                <td style={{ color: "#2BBDB5", border: "none" }}>
                  {" "}
                  243546.12443536
                </td>
                <td style={{ color: "white", border: "none" }}>
                  12425.21435364
                </td>
                <td style={{ color: "white", border: "none" }}>
                  12425.21435364
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
