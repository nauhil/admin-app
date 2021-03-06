'use strict';

var module = angular.module('supportAdminApp');

module.constant('users.Constants', {
  
  MSG_NO_RECORD_FOUND: "No record found",
  
  MSG_CLIPBORD_TOOLTIP: "Copy to clipboard",

  MSG_CLIPBOARD_COPIED: "Copied",

  LABEL_EMAIL_STATUS_VERIFIED: "Verified",
  
  LABEL_EMAIL_STATUS_UNVERIFIED: "Unverified",
  
  DICT_USER_STATUS: {
    'A': 'Verified',
    'U': 'Unverified',
    '4': 'Deactivated(User request)',
    '5': 'Deactivated(Duplicate account)',
    '6': 'Deactivated(Cheating account)'
  }
});
