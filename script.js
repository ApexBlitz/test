document.addEventListener('DOMContentLoaded', () => {
    const cardData = [
        { id: 'card1', url: 'https://www.google.com' },
        { id: 'card2', url: 'https://drive.google.com' },
        { id: 'card3', url: 'https://mail.google.com' },
        { id: 'card4', url: 'https://maps.google.com' }
    ];

    cardData.forEach(item => {
        const card = document.getElementById(item.id);
        if (card) {
            card.addEventListener('click', () => {
                window.open(item.url, '_blank');
            });
        }
    });
});