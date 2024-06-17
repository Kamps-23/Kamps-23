"use client";
import React, { useState, useEffect } from "react";
import "./users.css";
import axios from "axios";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/users/");
        setUsers(response.data.results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div>
        {users.map((user, index) => (
          <div key={index} className="users">
            <div>
              <p>
                {user.first_name} {user.last_name}
              </p>
              <p>{user.email}</p>
              <p>{user.phone_number}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
