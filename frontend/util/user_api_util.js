export const fetchAllUsers = () => (
    $.ajax({ 
        method: 'GET',
        url: `api/users`,
    })
);

export const fetchUser = (user) => (
    $.ajax({
        method: 'GET',
        url: `api/users/${user.id}`,
    })
);

export const updateUser = (user) => (
    $.ajax({
        method: 'PATCH',
        url: `api/users/${user.id}`,
        data: {user}
    })
);