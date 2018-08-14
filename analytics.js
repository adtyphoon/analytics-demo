import {slackChannelAlert} from './Slack';

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
    'Chat Now': 'ev-chat',
};

const shoppingCartEvents = {
  'Checkout Button': 'ev-checkout-button',
  'Checkout Success': 'ev-checkout-success',
  'PayPal Success': 'ev-paypal-success',
};

const chatEvents = {
  'Chat Submit': 'ev-submit-chat',
  'Open Chat Window': 'ev-open-chat-window'
};

const profileEvents = {
  'Upload Image': 'ev-upload-image',
  'Update Password': 'ev-update-password',
  'Update Username': 'ev-username-submit',
};

const events = {
    'Shopping-Site': {
        'Home Screen': homeScreenEvents,
        'Navigation': navigationEvents,
        'Footer': footerEvents,
        'Shopping Cart': shoppingCartEvents,
        'Chat': chatEvents,
        'Profile': profileEvents,
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
        if (label === 'Shopping Cart' || label === 'Chat') {
          slackChannelAlert(label);
        }
    });
})));
