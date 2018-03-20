import React from 'react'
import './footer.module.css'

const PublicFooter = () => {
    return (
        <footer>
            <div>
                <a href="https://weibo.com/Seavijay"><img src="../../icon/sinaweibo.svg" alt="微博" /></a>
                <a href="https://www.zhihu.com/people/seavijay"><img src="../../icon/zhihu.svg" alt="知乎" /></a>
                <a href="https://www.jianshu.com/users/e0328c41b2c5/timeline"><img src="../../icon/jianshu.svg" alt="简书" /></a>
                <a href="https://www.facebook.com/vijay.xie"><img src="Facebook .svg" alt="Facebook" /></a>
                <a href="https://www.instagram.com/ceavijay"><img src="../../icon/Instagram.svg" alt="Instagram" /></a>
                <a href="https://twitter.com/Sea_Vijay_"><img src="../../icon/Twitter.svg" alt="Twitter" /></a>
            </div>
            <p>Seavijay.gym@gmail.com</p>
            <span>Copyright © Seavijay Blog 2018</span>
        </footer>
    )
}

export default PublicFooter