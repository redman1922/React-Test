import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material'


const renderRenderMessage = (index, author, text, profileName) => {
    return (
        <ListItem button key={index}>
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: author === 'bender' ? 'green' : '#1d46ad' }}>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={text} secondary={author} />
        </ListItem >
    )
}
export default renderRenderMessage;