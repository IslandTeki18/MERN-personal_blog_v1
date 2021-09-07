import React from "react";

const UserTable = () => {
    const renderUserInfo = () => {
        const fakeUsers = [
            {
                firstname: "Frank",
                lastname: "Mur",
                email: "frankmur79@test.com",
                isAdmin: true,
                id: 1,
            },
            {
                firstname: "Bill",
                lastname: "Murry",
                email: "billmurry1@test.com",
                isAdmin: false,
                id: 2,
            },
            {
                firstname: "Tommy",
                lastname: "Bahama",
                email: "tomba12@test.com",
                isAdmin: false,
                id: 3,
            },
            {
                firstname: "Susan",
                lastname: "Case",
                email: "scase3@test.com",
                isAdmin: false,
                id: 4,
            },
        ];
        return (
            <>
                {fakeUsers.map((x) => (
                    <tr>
                        <th scope="row">{x.id}</th>
                        <td>{x.firstname}</td>
                        <td>{x.lastname}</td>
                        <td>{x.email}</td>
                        <td>{x.isAdmin === true ? "True" : "False"}</td>
                    </tr>
                ))}
            </>
        );
    };

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Is Admin</th>
                </tr>
            </thead>
            <tbody>{renderUserInfo()}</tbody>
        </table>
    );
};

export default UserTable;
