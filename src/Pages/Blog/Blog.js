import React from 'react';

const Blog = () => {
    return (
        <div>
            <p className='fs-4 text-center mt-3'>Difference between Authorization and Authentication.</p>
            <table className="table table-success table-striped mx-auto w-50">
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

            <div className='border border-2 rounded-2 p-2 w-50 mx-auto'>
                <p className='fs-4 text-center mt-1'>Why you are using firebase?What other options do you have to implement authentication?</p>
                <p>We use firebase to validate user by authentication and authoraization.Also we can host and deploy our website.We can use database in firebase.</p> <br />
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
        </div>
    );
};

export default Blog;