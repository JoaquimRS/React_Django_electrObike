import { useEffect, useState } from "react";
import { notificationsService } from "../services";

export default function useAdminNotifications() {
    const [notifications, setNotifications] = useState([])
    useEffect(() => {
        notificationsService.getNotifications().then((res) => {
            setNotifications(res.body)
        })
    }, [])
    return notifications
}

export function useDeleteNotifications(notification) {
    return new Promise((resolve, reject) => {
        notificationsService.deleteNotifications(notification.id_notification)
          .then((res) => {
              resolve(res.body);
          })
          .catch((err) => {
              reject(err);
          });
      });
}

export function useCreateNotifications(notification) {
    return new Promise((resolve, reject) => {
      notificationsService.addNotifications(notification)
        .then((res) => {
            resolve(res.body);
        })
        .catch((err) => {
            reject(err);
        });
    });
}
  