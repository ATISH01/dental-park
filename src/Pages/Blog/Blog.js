import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Row md={3} className="g-0">
            <Col xs={12} md={8} className="mx-auto p-2">
            <div className='mb-4'> 
            <p className='fs-4 text-center my-3'>Difference between Authorization and Authentication. <hr className=' mx-auto' /></p>
            <table className="table table-success table-striped mx-auto ">
                <thead>
                    <tr>
                        <td>Authentication</td>
                        <td>Authorization</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Identity of users checked in authentication.</td>
                        <td>Authorization checked if the user is allowed for the acessing resources.</td>
                    </tr>
                    <tr>
                        <td>Users are verified in this process.</td>
                        <td>Users are validated in this process</td>
                    </tr>
                    <tr>
                        <td>It's checked if the user is real or not.</td>
                        <td>It's checked the permission allowed for the user.</td>
                    </tr>
                </tbody>
            </table>
            </div>

            <div className='border border-2 rounded-2 mt-3 p-2 mx-auto'>
                <p className='fs-4 text-center mt-1'>Why you are using firebase?What other options do you have to implement authentication?</p>
                <p>We use firebase to validate user by authentication and authoraization.Also we can host and deploy our website.We can use database in firebase.It has rich documentation.</p> <br />
                <article>Besides firebase other options are</article>
                <p>Parse ;
                    Back4app ;
                    Kinvey;
                    Backendless;
                    Kuzzle;
                    Pubnub;
                    Kumulos;
                    Game Sparks;
                    Hoodie;
                    Appwrite;
                    Deployd;
                    NHost;
                    Amplify;
                    Heroku;
                </p>
            </div>
            <p>
            </p>
            <div className='border border-2 rounded-2 my-3 p-2  mx-auto'>
            <p className='fs-4  mt-1'>What other services does firebase provide other than authentication?</p>
                <article className=' mt-1'>
                Firebase is mostly use for Authentication system for web app,android app, ios app etc.It also provides many other reliable feature. <br />
                It provides --
                1.Cloud Firestore. 2.Cloud Functions. 3.Hosting. 4.Cloud Storage. 5.Google Analytics. 6.Predictions. 7.Cloud Messaging.
                </article>
                </div>
                </Col>
        </Row>
    );
};

export default Blog;