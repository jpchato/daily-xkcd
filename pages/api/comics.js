// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json(
    [
      { safe_title: 'Oily House Index' },
      { alt: 'We\'re underwater on our mortgage thanks to the low price of water.' },
      { img: 'https://imgs.xkcd.com/comics/oily_house_index.png' },
    ]    
  )
}
