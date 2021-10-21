import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

const UserAvater = () => {
    
    return(
        <SAvatar src="https://picsum.photos/200/300" alt="UserAvatar" sx={{ border:3,borderColor:'primary.main'}}></SAvatar>
    )
};

const SAvatar = styled(Avatar)`


`;

export default UserAvater
