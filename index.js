
qas = document.getElementsByClassName("qa")
qaArray = Array.from(qas)

for (const element of qaArray) {
    
    element.childNodes[1].onclick = run
    
    function run() {
        
        let q = element.childNodes[1];
        let a = element.childNodes[3];
        let ar = q.childNodes[1];
        if (a.style.display != `block`) {
            a.style.display = `block`
            ar.style.transform = `rotate(180deg)`
            
        } else {
            a.style.display = `none`
            ar.style.transform = `rotate(360deg)`
        }

        q.classList.toggle(`question_open`)
        q.classList.toggle(`question`)
    }
}