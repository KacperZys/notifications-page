// button to mark messages as read
const markRead = document.querySelector('.main__btn-read');
let unread = document.querySelectorAll('.unread');
const notificationCount = document.querySelector('.main__notifications-count');

markRead.addEventListener('click', e => {
    unread.forEach(item => item.classList.remove('unread'))
});

// notification count display
let interval = setInterval(notificationStatus, 100);

function notificationStatus() {
    unread = document.querySelectorAll('.unread');

    if (unread.length > 0)
        notificationCount.innerHTML = unread.length;
    else {
        notificationCount.innerHTML = '0';
        clearInterval(interval);
    }
}