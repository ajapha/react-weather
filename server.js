const express =  require('express');

const app = express();

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] === 'https') {
        return res.redirect(`http://${req.hostname}${req.url}`);
    }
    next();
});
app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
});