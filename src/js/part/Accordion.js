export class Accordion{
    constructor(section) {
        const panels = section.querySelectorAll('.panel-group')

        panels.forEach((el)=>{
            this.intFaqList(el)
        })

    }

    intFaqList(el){

        let panelItem = el.querySelectorAll('.panel')
        panelItem.forEach((item)=>{

            let panelTitle = item.querySelector('.item_title')
            let faqContent = item.querySelector('.item_content');
            APP.gsap.set(faqContent, {
                height: 0,
            });
            panelTitle.addEventListener('click', ()=>{
                item.classList.toggle('open')
                if(item.classList.contains('open')){
                    APP.gsap.set(faqContent, {
                        height: 'auto',
                    });
                    APP.gsap.from(faqContent, {
                        height: 0,
                        duration: 0.8,
                        ease: "power2.out",
                    });
                } else {
                    let height = faqContent.getBoundingClientRect().height

                    APP.gsap.to(faqContent, {
                        height: 0,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                }

            })
            this.checkOpen(item, faqContent)
                .then(()=>{
                    faqContent.classList.add('load');
                })
        });

        const loadPanel = panelItem[0]
        let faqContent = loadPanel.querySelector('.item_content');
        loadPanel.classList.toggle('open')
        APP.gsap.set(faqContent, {
            height: 'auto',
        });
        APP.gsap.from(faqContent, {
            height: 0,
            duration: 0.8,
            ease: "power2.out",
        });
    }

    async checkOpen(item, content){
        if(item.classList.contains('open')){
            APP.gsap.set(content, {
                height: 'auto',
            });
        }
    }
}
