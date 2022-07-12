import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Head from "next/head";

import "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    
    <div className="conatiner h-screen font-body scroll-smooth">

      <Head>
      <link rel="shortcut icon" href="/favicon.png" />
        <title>Renewable Energy Company</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="h-[28rem]  bg-bannerTop bg-cover" >
        <div className="h-32 flex justify-around pt-8">

          <div className="h-44 w-44 bg-logo bg-cover"></div>

          <div>
            <nav>
              <ul className="flex gap-5 text-white pt-14">
                <li className="hover:underline"><a href="#sobre">QUEM SOMOS</a></li>
                <li className="hover:underline"><a href="#servicos">SERVIÇOS</a></li>
                <li className="hover:underline"><a href="#contato">CONTATO</a></li>
              </ul>
            </nav>
          </div>

        </div>
        

      </div>

      <section id="sobre" className="h-[42rem] bg-banner2 bg-cover bg-center flex justify-center text-enseada ">
        <div data-aos="fade-up" className="h-[32rem] w-4/5 mt-24 px-28">
          <h2 className="pt-5 pb-5 pl-8 text-xl tracking-[.25em]">
            <b>REGY COMPANY</b>
          </h2>
          <h3 className="pb-10 pl-8 text-3xl leading-10">
            <b>
              Quem somos
            </b>
          </h3>

          <div className="border-l border-black w-2/4 pl-8">
            <p data-aos="fade-up" className="pb-5 text-2xl">
              A Renewable Energy Company, também conhecida como RegyCo, é uma empresa dedicada a resolver problemas de carácter energético, social e ambiental dentro das empresas, comunidades, condomínios, lares, indústrias, hotéis, entre outros. 
              Atuamos em uma diversidade de soluções e sem dúvidas podemos melhorar seu sistema energético
            </p>
          
          </div>
        </div>
      </section>

      <section className="h-[42rem] bg-gray-50 p-32 text-enseada">
        <div className=" grid px-36">
          <div className=" col-span-3 h-24 ">
            <h2 data-aos="fade-right" className="pb-1 tracking-[.25em] text-lg">
              
            </h2>
            <h3 data-aos="fade-up" className="text-4xl">
              ATENDEMOS EM TODO BRASIL
            </h3>
          </div>

          <div data-aos="fade-up" className="pt-12 h-96 pr-20">
            <div className="border-l border-black">
              <p className="pl-8 text-2xl">
                A RegyCo atende projetos em todas as regiões do Brasil, possuímos também uma solução energética adequada para cada região e Bioma Brasileiro
                Confira com nosso time de especialistas como você pode poupar seu dinheiro dependendo da sua localização. 

              </p>
            </div>
            
          </div>

          <div data-aos="fade-up" className="pl-24">
            <p className="pb-5 text-xl tracking-[.25em]">
              <strong>FOCO EM OPORTUNUDADES</strong>
            </p>

            <ul className="border-l border-black leading-loose text-xl">
              <li className="pl-12 pb-3">
                <b>ENERGIA EÓLICA</b>
              </li>
              <hr className="border-black" />
              <li className="pl-12 pb-3">
                <b>PAINÉIS SOLARES</b>
              </li>
              <hr className="border-black" />
              <li className="pl-12 pt-3">
                <b>MOINHOS ELÉTRICOS</b>
              </li>
            </ul>


          </div>
        </div>
      </section>

      

      <section className="h-[42rem] bg-banner5 ml- bg-cover bg-center flex justify-center items-center text-enseada">
        <div data-aos="fade-up" className="h-[32rem] w-4/5 mt-10 px-28">
          <h2
            data-aos="fade-left"
            className="pt-5 pb-5 pl-8 text-xl tracking-[.25em]"
          >
            
          </h2>
          <h3 className="pb-10 pl-8 text-3xl leading-10">
            <b>
            PRINCIPAIS SISTEMAS DE GERAÇÃO
            </b>
          </h3>

          <div className="border-l border-black w-2/4 pl-8">
            <p data-aos="fade-up" className="pb-5 text-2xl">
              A RegyCo consegue atender projetos que envolvam diferentes fontes de geração. 
              Entre em contato para saber qual a melhor opção para você.
            </p>
              
              <ul data-aos="fade-up" className="list-disc ml-10">
                <li>Energia Eólica de pequeno porte</li>
                <li>Energia Solar Térmica e Fotovoltaica (painéis solares)</li>
                <li>Energia Hidráulica de pequeno porte (moinhos elétricos)</li>
              </ul>

          </div>
        </div>
      </section>

      <section id="servicos" className="h-[50rem] px-40 py-20 f bg-banner4 bg-cover bg-center text-enseada ">
        <div className=" h-full">
          <div className=" pl-[52rem] ">
            <div className=" h-48">
              <h2
                data-aos="fade-right"
                className="pb-3 tracking-[.25em] text-lg"
              >
                
              </h2>
              <h3 data-aos="fade-up" className="text-4xl pb-5">
                SERVIÇOS
              </h3>
              <p data-aos="fade-up" className="border-l border-black pl-3 text-2xl">
                A RegyCo instala sistemas de geração, aluga esses sistemas tanto como locador quanto locatário. Isto é, nós tanto pagamos pelo o uso do seu sistema como disponibilizamos sistemas mediante pagamentos.
                Saiba como você pode ganhar com sua própria usina.
              </p>
            </div>
          </div>

          <div className=" flex justify-center pt-36">
            <div
              data-aos="fade-right"
              className="border-2 border-black box1 mr-36 w-64 h-48"
            >
              
              <p className="pt-4">Energia Eólica de Pequeno porte</p>
            </div>
            <div
              data-aos="fade-up"
              className="box2 border-2 border-black mr-36 w-64 h-48"
            >
              
              <p className="pt-4">ENERGIA SOLAR FOTOVOLTAICA</p>
            </div>
            <div
              data-aos="fade-left"
              className="border-2 border-black box3 w-64 h-48"
            >
              
              <p className="pt-4">ENERGIA HDRÁULICA DE PEQUENO PORTE</p>
            </div>
          </div>
        </div>
      </section>

      

      <footer id="contato" className="h-[50rem] bg-banner6 bg-cover bg-center bg-no-repeat text-white">

        <h2 className="pb-2 pl-32 tracking-[.25em] pt-16 text-lg"><b>FALE COM UM CONSULTOR</b></h2>
        <h3 className="pl-32 text-4xl">Saiba que é possivel economizar investindo em energia solar</h3>


        <div className="container pt-48">
      <div className="content">
        <div className="left-side">
          <div className="address details">
            
          </div>
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Telefone</div>
            <div className="text-one">+1 (580) 910-5115</div>
            
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">support@regycoin.com</div>
            
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Envie sua mensagem</div>

          <form action="https://formsubmit.co/contact@regycoin.com" method="POST">
            <div className="input-box">
              <input type="text" placeholder="Digite seu nome" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Digite seu email" />
            </div>
            <div className="input-box message-box">
              <textarea placeholder="Digite sua mensagem"></textarea>
            </div>
            <div className="button">
              <input type="button" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </div>
      
      
       
      </footer>
    </div>
  );
}
