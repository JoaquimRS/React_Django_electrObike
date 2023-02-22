import { useEffect, useState } from "react";
import { usersService } from "../services";

export default function useAdminUsers() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        usersService.getUsers().then((res) => {
            setUsers(res.body)
        })
    }, [])
    return users
}

export function useDeleteUsers(user) {
    return new Promise((resolve, reject) => {
        usersService.deleteUsers(user.id_user)
          .then((res) => {
              resolve(res.body);
          })
          .catch((err) => {
              reject(err);
          });
      });
}

export function useCreateUsers(user) {
    return new Promise((resolve, reject) => {
      usersService.addUsers(user)
        .then((res) => {
            resolve(res.body);
        })
        .catch((err) => {
            reject(err);
        });
    });
}
  
  

export function useUpdateUsers(user, rowUser) {
    return new Promise((resolve,reject) => {
        usersService.updateUsers(rowUser.id_user, user)
            .then((res) => {
                resolve(res.body)
            })
            .catch((err) => {
                reject(err);
            })
    })
}