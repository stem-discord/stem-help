# stem-help

This is only front-end

# auth flow

```vb
User clicks login
User arrives at login page

Script sends OAuth to API with params if exist
if API returns authorized:
    if param does not exist:
        return to last url || homepage and alert('already authorized')
    else:
        return to last url || homepage and alert('authorized successfully')
else:
    Browser Opens OAuth uri in same tab
    user runs OAuth
    OAuth closes and user returns to original url with params
    go to start

```

