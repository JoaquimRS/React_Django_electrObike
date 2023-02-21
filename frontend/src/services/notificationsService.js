import response from './Api'

export default {
    getNotifications() {
        return response.get('/notifications')
    },
    addNotifications(newNotification) {
        return response.post('/notifications/create',newNotification)
    },
    deleteNotifications(idNotification) {
        return response.del(`/notifications/delete/${idNotification}`)
    }

}
