export default (req, res) => {
    res.statusCode = 200

    const snacks = [
        { safe_title: 'Oily House Index' },
        { alt: 'We\'re underwater on our mortgage thanks to the low price of water.' },
        { img: 'https://imgs.xkcd.com/comics/oily_house_index.png' },
    ]

    const comic = comics[parseInt(req.query.id) - 1];

    res.json(comic)
}