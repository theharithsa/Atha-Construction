/**
 * GTM Verification Script
 * This script helps verify that Google Tag Manager is properly loaded
 * Run this in the browser console on any page
 */

console.log('🔍 GTM Verification Script Started');

// Check if dataLayer exists
if (typeof window.dataLayer !== 'undefined') {
    console.log('✅ dataLayer found:', window.dataLayer);
    
    // Check for GTM start event
    const gtmStartEvent = window.dataLayer.find(event => event.event === 'gtm.js' || event['gtm.start']);
    if (gtmStartEvent) {
        console.log('✅ GTM initialization event found:', gtmStartEvent);
    } else {
        console.log('❌ GTM initialization event not found');
    }
} else {
    console.log('❌ dataLayer not found - GTM may not be loaded');
}

// Check if GTM script is loaded
const gtmScripts = Array.from(document.querySelectorAll('script')).filter(
    script => script.src && script.src.includes('googletagmanager.com/gtm.js')
);

if (gtmScripts.length > 0) {
    console.log('✅ GTM script found:', gtmScripts[0].src);
    
    // Extract GTM ID from the script src
    const gtmIdMatch = gtmScripts[0].src.match(/id=([^&]+)/);
    if (gtmIdMatch) {
        console.log('✅ GTM ID detected:', gtmIdMatch[1]);
        
        if (gtmIdMatch[1] === 'GTM-K573RZP7') {
            console.log('🎉 Correct GTM ID (GTM-K573RZP7) is being used!');
        } else {
            console.log('⚠️ Different GTM ID found:', gtmIdMatch[1]);
        }
    }
} else {
    console.log('❌ GTM script not found');
}

// Check noscript iframe
const gtmNoScript = document.querySelector('noscript iframe[src*="googletagmanager.com/ns.html"]');
if (gtmNoScript) {
    console.log('✅ GTM noscript iframe found:', gtmNoScript.src);
    
    const noScriptIdMatch = gtmNoScript.src.match(/id=([^&]+)/);
    if (noScriptIdMatch && noScriptIdMatch[1] === 'GTM-K573RZP7') {
        console.log('✅ Correct GTM ID in noscript tag');
    } else {
        console.log('⚠️ GTM ID in noscript tag:', noScriptIdMatch ? noScriptIdMatch[1] : 'not found');
    }
} else {
    console.log('❌ GTM noscript iframe not found');
}

// Check Google Analytics (gtag)
if (typeof window.gtag !== 'undefined') {
    console.log('✅ Google Analytics (gtag) found');
} else if (typeof window.ga !== 'undefined') {
    console.log('✅ Google Analytics (Universal Analytics) found');
} else {
    console.log('ℹ️ Google Analytics not detected (may be loaded via GTM)');
}

// Performance check
const gtagScript = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
if (gtagScript) {
    console.log('✅ Google Analytics script found:', gtagScript.src);
}

console.log('🔍 GTM Verification Complete');
console.log('📊 To test further, check Network tab for GTM requests or use GTM Preview mode');

// Helper function to track custom events
window.trackGTMEvent = function(eventName, parameters = {}) {
    if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
            event: eventName,
            ...parameters
        });
        console.log('📤 Custom event pushed to dataLayer:', eventName, parameters);
    } else {
        console.log('❌ Cannot track event - dataLayer not available');
    }
};

console.log('💡 Use trackGTMEvent("test_event", {custom: "data"}) to test custom tracking');
