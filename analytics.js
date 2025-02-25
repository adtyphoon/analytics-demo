const footerEvents = {
    'Chat Now': 'ev-chat',
};

const shoppingCartEvents = {
  'Checkout Button': 'ev-checkout-button',
  'Checkout Success': 'ev-checkout-success',
  'PayPal Success': 'ev-paypal-success',
};

const chatEvents = {
  'Chat Submit': 'ev-submit-chat',
};

const events = {
    'Shopping-Site': {
        'Home Screen': homeScreenEvents,
        'Navigation': navigationEvents,
        'Footer': footerEvents,
        'Shopping Cart': shoppingCartEvents,
        'Chat': chatEvents,
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
        if (label === 'Shopping Cart') {
          slackChannelAlert(label);
        } else if (label === 'Chat') {
          slackChannelAlert(label);
        }
    });
})));
