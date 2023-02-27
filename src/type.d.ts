interface LineMessage {
    _id: string
    line_user_id: string
    date: string
    message: string
}

interface ActionForm {
    [key: string]
    date: string
    action: string
    weight: string
    times: string
}