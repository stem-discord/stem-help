# stem-help

This is only front-end

# I don't know `Node` or `npm`! What do I do?

Keep calm. Just do this

Go to this website

https://nodejs.org/download/release/v16.6.0

for windows users, find the one ending with `x64.msi`. Click and install it

if you followed this step, you should have `npm` installed as well

Now open the command line in the project directory

```sh
npm ci
npm run serve
````

And you got a working front end website

> Disclaimer: if you touch the config files, make sure you know what you are doing.
> Because it is very easy to fall down a rabbit hole of Javascript frameworks.
> I kid you not it is not worth falling into that rabbit hole

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

