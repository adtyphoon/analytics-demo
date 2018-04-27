const homeScreenEvents = {
    'Buy Button': 'ev-buy',
    'Chat Button': 'ev-chat',
};

const navigationEvents = {
    'Explore Link': 'ev-explore',
    'Shopping Cart': 'ev-shopping-cart',
    'Compare Link' 'ev-compare',
};

const footerEvents = {
    'Contact Support Link': 'ev-contact-support',
};

const events = {
    'Shopping-Site': {
        'Home Screen': homeScreenEvents,
        'Navigation': navigationEvents,
        'Footer': footerEvents,
    },
};

const iterKeys = (object, func) => Object.keys(object).forEach(func);

iterKeys(events, category => iterKeys(events[category], label => iterKeys(events[category][label], event => {
    const className = events[category][label][event];
    $(`.${className}`).on('click', function(event) {
        analytics.track(event, {
            category,
            label,
        });
    });
})));
