/*
Aufgabe: 9, DynHTML: Erpresserbrief
Name: Laura Bongard
Matrikel: 256028
Datum: 15.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe9 {

    window.addEventListener("load", init);

    let letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let currentLetter: string;
    
    let writingSection: HTMLDivElement;
    
    function init(): void {
        for (let i: number = 0; i < letters.length; i++) {
            let d: HTMLDivElement = document.createElement("div");
            d.style.width = "2%";
            d.style.padding = "0.3em";
            d.style.border = "1px solid grey";
            d.style.height = "4%";
            d.innerText = letters[i];
            
            d.id = letters[i];
            d.className = "letters";
            
            d.addEventListener("click", handleMouseClick);
            
            document.body.appendChild(d);
            
        }
        
        drawWritingSection();
        
     }

    function handleMouseClick(_event: MouseEvent): void {
        let s: HTMLDivElement = <HTMLDivElement>_event.target;
        s.style.backgroundColor = "lightblue";
        
        currentLetter = s.id;
        
        let listOfDivs: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("letters");
        
        for (let i: number = 0; i < listOfDivs.length; i++ ) {
            if (currentLetter != listOfDivs[i].id) {
                listOfDivs[i].style.backgroundColor = "white";
            }
        }
    }
    
    function drawWritingSection(): void {

            let l: HTMLDivElement = document.createElement("div");

            l.style.width = "855px";
            l.style.height = "300px";
            l.style.border = "2px solid black";
            l.style.marginLeft = "3px";
            l.style.marginTop = "10px";
            
            l.addEventListener("click", setLetter);
            document.body.appendChild(l);

        }

    
    function setLetter(_event: MouseEvent): void {
        
            let box: HTMLDivElement = document.createElement("div");
            box.style.width = "2%";
            box.style.padding = "0.3em";
            box.style.border = "1px solid grey";
            box.style.height = "4%";
            box.style.position = "absolute";
            box.style.backgroundColor = "white";
            box.innerText = currentLetter;
            box.style.left = _event.pageX + "px";
            box.style.top = _event.pageY + "px";
            
            document.body.appendChild(box);
            writingSection = <HTMLDivElement>_event.target;

        }
    
    /*function deleteLetter(): void {
        }*/
}