
const puppeteer = require('puppeteer')

const instagram = {
  browser:null,
  page:null,
  tags:[""],
  async initilize(){
    this.browser = await puppeteer.launch({
      headless:false
    })
    this.page = await this.browser.newPage()


  },
  async login(username, password){
    try {
      await this.page.goto('https://instagram.com', {waitUntil: 'networkidle2'});
    } catch (error) {
      if(error){
        await this.page.goto('https://instagram.com', {waitUntil: 'networkidle2'});
      }
    }


    await this.page.waitFor(3000);

    console.log('====================================');
    console.log('gettinh the button');
    console.log('====================================');

    let hello = await instagram.page.$x('//a[contains(text(), "Log in")]');
    
    hello[0].click();

    await this.page.waitFor(1000)

    await this.page.type('input[name=username]', username,{delay: 50})
    await this.page.type('input[name=password]', password,{delay: 50})

    let loginbutton = await this.page.$$('button .Igw0E.IwRSH.eGOV_._4EzTm')
    loginbutton[0].click()

    await this.page.waitFor(10000)


    let noNotification = await this.page.$$('button.aOOlW.HoLwm');
    noNotification[0].click()



  },
  async likes(tags) {

    await this.page.waitFor(3000);

    for(let i = 0 ; i < tags.length; i++){

      await this.page.goto(`https://www.instagram.com/explore/tags/${tags[i]}/`, {waitUntil: 'networkidle2'})

      await this.page.waitFor(3000);

      let allposts = await this.page.$$('.v1Nh3.kIKUG._bz0w');

      if(allposts.length > 3){

        await allposts[1].click()

        await this.page.waitFor(10000);

        let likebutton = await this.page.$('.dCJp8.afkep._0mzm-')

        await likebutton.click()

        //next Post

        let nextbutton = await this.page.$('.HBoOv.coreSpriteRightPaginationArrow')

        await nextbutton.click()


        await this.page.waitFor(10000);

        likebutton = await this.page.$('.dCJp8.afkep._0mzm-')

        await likebutton.click()

        //next Post

        nextbutton = await this.page.$('.HBoOv.coreSpriteRightPaginationArrow')

        await nextbutton.click()




        await this.page.waitFor(10000);

        likebutton = await this.page.$('.dCJp8.afkep._0mzm-')

        await likebutton.click()

        //next Post

        nextbutton = await this.page.$('.HBoOv.coreSpriteRightPaginationArrow')

        await nextbutton.click()


        let closebutton = await this.page.$('button.ckWGn')
        
        await closebutton.click()

        

      }
      

      console.log('====================================');
      console.log('gone to first tag');
      console.log('====================================');

      debugger

    }




  }
  
}


module.exports = instagram
