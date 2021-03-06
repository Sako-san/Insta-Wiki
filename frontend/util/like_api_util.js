
export const createLike = (like) => {
    return (
    $.ajax({
        method: 'POST',
        url: 'api/likes',
        data: {like}
    })
    );
};

export const deleteLike = (like) => (
    $.ajax({
        method: 'DELETE',
        url: `api/likes/${like.post_id}`
    })
);