alert('here');
window.onload = function () {
    console.log('likes are loaded1111');
    if (window.jQuery) {
        console.log('likes are loadedjqjqjqjq');
        $(document).ready(function () {
            console.log('likes are loaded');
            $('button.toggle-likes').on('click', function (e) {
                // e.preventDefault();
                var $link = $(this).attr('likes-link');

                $.ajax({
                    method: 'POST',
                    url: $link,
                }).done(function (data) {
                    switch (data.action) {
                        case 'liked':
                            var number_of_likes_str = $('.number-of-likes-' + data.id);
                            var number_of_likes = parseInt(number_of_likes_str.html().replace(/\D/g, '')) + 1;
                            number_of_likes_str.html('(' + number_of_likes + ')');
                            $('.likes-video-id-' + data.id).show();
                            $('.dislikes-video-id-' + data.id).hide();
                            $('.video-id-' + data.id).hide();

                            break;
                        case 'disliked':
                            var number_of_dislikes_str = $('.number-of-dislikes-' + data.id);
                            var number_of_dislikes = parseInt(number_of_dislikes_str.html().replace(/\D/g, '')) + 1;
                            number_of_dislikes_str.html('(' + number_of_dislikes + ')');
                            $('.dislikes-video-id-' + data.id).show();
                            $('.likes-video-id-' + data.id).hide();
                            $('.video-id-' + data.id).hide();

                            break;
                        case 'undo liked':
                            var number_of_likes_str = $('.number-of-likes-' + data.id);

                            var number_of_likes = parseInt(number_of_likes_str.html().replace(/\D/g, '')) - 1;
                            number_of_likes_str.html('(' + number_of_likes + ')');
                            $('.video-id-' + data.id).show();
                            $('.dislikes-video-id-' + data.id).hide();
                            $('.likes-video-id-' + data.id).hide();

                            break;
                        case 'undo disliked':
                            var number_of_dislikes_str = $('.number-of-dislikes-' + data.id);
                            var number_of_dislikes = parseInt(number_of_dislikes_str.html().replace(/\D/g, '')) - 1;
                            number_of_dislikes_str.html('(' + number_of_dislikes + ')');
                            $('.video-id-' + data.id).show();
                            $('.dislikes-video-id-' + data.id).hide();
                            $('.likes-video-id-' + data.id).hide();

                            break;
                    }
                })
            });
        });
    } else {
        console.log('Likes functionality not working without jQuery');
    }
}