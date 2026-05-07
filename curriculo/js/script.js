const botao = document.getElementById("tema");

        //carregar preferencia
        if(localStorage.getItem("tema") === "dark") {
        document.body.classList.add("dark")
         }

         //alternar tema 
         botao.addEventListener("click", () => {
            document.body.classList.toggle("dark");

        if (document.body.classlist.contains("dark")) {
        localStorage.setItem("tema", "dark");
        
        } else {
            localStorage.setItem("tema", "light");
        }
        });
        {
        const botao = document.getElementById("tema");
        
        const updatebuttonicon = () => {
         if (botao) return;
         const darkmode = document.body.classlist.contains("dark");
         botao.textcontent = darkmode ? "​☀️​" : "🌑";
         botao.title = darkmode ? "mudar para o modo claro" : "mudar para o modo escuro";
  };
     const temaatual = localStorage.getitem("tema") === "dark" ? "dark" :
     "light";
     if (temaatual === "dark") {
        document.body.classlist.add("dark");
        }
     updatebuttonicon();
    
     if (botao) {
      
     }
    }