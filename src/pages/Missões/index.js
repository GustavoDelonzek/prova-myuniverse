import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './style.css';
import Temporizador from "./temporizador";
import ProgressBar from "./progressBar"


function formatarTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}


const artemisDois = {
    nome: "Missão Artemis 2",
    descricao: "A segunda missão do programa Artemis está prevista para 2024. Planejada para durar dez dias, o objetivo dessa etapa é o transporte de tripulantes para a realização de um sobrevoo na Lua. Com isso, será possível avaliar a maneira como os veículos e seus respectivos sistemas atuam na viagem e garantir a segurança das missões futuras. Trata-se da viagem mais distante já realizada pelos humanos no espaço profundo, já que o trajeto prevê a volta completa ao redor da Lua e a passagem pelo seu chamado lado escuro...",
    inicio: "2017-12-11T00:00",
    termino: "2024-11-01T00:00",
}

const artemisTres =    {
    nome: "Missão Artemis 3",
    descricao: "A terceira etapa do programa tem previsão para início em 2025 e deverá ser uma missão contínua. Um de seus objetivos é o de colocar o ser humano mais uma vez na superfície da Lua. Além disso, o Artemis III visa à exploração recorrente do satélite e o ganho de experiência para o desenvolvimento de missões mais longas e distantes, como aquela que deverá levar uma tripulação ao planeta Marte.",
    inicio: "2017-12-11T00:00",
    termino: "2025-01-10T00:00",
    }
const missaoA =   {
    nome: "Missão A",
    descricao: "A Missão A, intitulada 'Exploração de Marte', tem como objetivo principal investigar a superfície e as condições atmosféricas do planeta vermelho. A equipe de astronautas embarcará em uma nave espacial avançada equipada com tecnologias de ponta, incluindo robôs exploradores para coleta de amostras do solo marciano. A missão visa descobrir sinais de vida passada e entender melhor a geologia marciana. (Essa missão é ficticia, apenas pra preencher meu projeto web).",
    inicio: "2023-05-25T00:00",
    termino: "2024-09-09T00:00",
    }
const missaoB  = {
    id: 4,
    nome: "Missão B",
    descricao: "A Missão B, denominada 'Estudo de Luas de Júpiter', concentrar-se-á nas luas intrigantes do maior planeta do nosso sistema solar. Equipada com sondas especializadas, a equipe explorará luas como Europa, conhecida por seus oceanos subterrâneos, e Ganimedes, a maior lua do sistema solar. O objetivo é analisar a composição dessas luas, procurar sinais de água e entender melhor os processos geológicos que ocorrem em seus ambientes únicos. (Essa missão é ficticia, apenas pra preencher meu projeto web).",
    inicio: "2023-10-25T00:00",
    termino: "2024-01-13T00:00",
       
}


function Missões(){
    const temporizadorArtemis = Temporizador({dataTermino: artemisDois.termino});
    const progressArtemistwo = ProgressBar({dataInicio: artemisTres.inicio,dataTermino:artemisDois.termino});

    const temporizadorArtemisThree = Temporizador({dataTermino: artemisTres.termino});
    const progressArtemisThree = ProgressBar({dataInicio: artemisTres.inicio, dataTermino: artemisTres.termino})

    const temporizadormissaoA = Temporizador({dataTermino: missaoA.termino});
    const progressmissaoA = ProgressBar({dataInicio: missaoA.inicio, dataTermino: missaoA.termino})

    const temporizadormissaoB = Temporizador({dataTermino: missaoB.termino});
    const progressmissaoB = ProgressBar({dataInicio: missaoB.inicio, dataTermino: missaoB.termino})

    return(
        <div id="missoes" className="caixa">
            <div className="d-flex flex-column align-items-center">
            <h1 className="titulo-pagina">Acompanhe as próximas missões</h1>
                <div className="d-flex flex-column align-items-center">
                <ul className="d-flex nav-tabs" id="myTabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active" id="artemisTwo-tab" data-bs-toggle="tab" href="#artemisTwo" role="tab" aria-controls="artemisTwo" aria-selected="true"
                  >
                    Artemis II
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link" id="artemisThree-tab" data-bs-toggle="tab" href="#artemisThree" role="tab" aria-controls="artemisThree" aria-selected="true"
                  >
                    Artemis III
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link" id="missaoA-tab" data-bs-toggle="tab" href="#missaoA" role="tab" aria-controls="missaoA" aria-selected="true"
                  >
                    Missao A
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link" id="missaoB-tab" data-bs-toggle="tab" href="#missaoB" role="tab" aria-controls="missaoB" aria-selected="true"
                  >Missao B</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabsContent">
                    <div className="tab-pane fade show active" id="artemisTwo" role="tabpanel" aria-labelledby="artemisTwo-tab">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="titulo-missao">Artemis II</h1>
                            </div>
                        </div>
                        <div className="teste-progresso">
                            <div className="progress-circular" style={{
                            background: `conic-gradient(#44394d ${progressArtemistwo.angulo}deg, #ededed 0deg)`,
                        }}> 
                                <span className="value">{progressArtemistwo.percentage.toFixed(2)}%</span>
                            </div>
                            <div className="temporizador-container">
                                <div className="temporizador dias-c">
                                    <p className="text" id="dias">{formatarTempo(temporizadorArtemis.dias)}</p>
                                    <span>dias</span>
                                </div>
                                <div className="temporizador horas-c">
                                    <p className="text" id="horas">{formatarTempo(temporizadorArtemis.horas)}</p>
                                    <span>horas</span>
                                </div>
                                <div className="temporizador minutos-c">
                                    <p className="text" id="minutos">{formatarTempo(temporizadorArtemis.minutos)}</p>
                                    <span>minutos</span>
                                </div>
                                <div className="temporizador segundos-c">
                                    <p className="text" id="segundos">{formatarTempo(temporizadorArtemis.segundos)}</p>
                                    <span>segundos</span>
                                </div>
                            </div>
                        </div>
                        <div className="descricao-missao caixa">
                            <h2>Descrição</h2>
                            <p>{artemisDois.descricao}</p>    
                        </div>
                    </div>
                    <div className="tab-pane fade show " id="artemisThree" role="tabpanel" aria-labelledby="artemisThree-tab">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="titulo-missao">Artemis III</h1>
                            </div>
                        </div>
                        <div className="teste-progresso">
                        <div className="progress-circular" style={{
                            background: `conic-gradient(#44394d ${progressArtemisThree.angulo}deg, #ededed 0deg)`,
                        }}> 
                            <span className="value">{progressArtemisThree.percentage.toFixed(2)}%</span>
                        </div>
                        <div className="temporizador-container">
                            <div className="temporizador dias-c">
                                <p className="text" id="dias">{formatarTempo(temporizadorArtemisThree.dias)}</p>
                                <span>dias</span>
                            </div>
                            <div className="temporizador horas-c">
                                <p className="text" id="horas">{formatarTempo(temporizadorArtemisThree.horas)}</p>
                                <span>horas</span>
                            </div>
                            <div className="temporizador minutos-c">
                                <p className="text" id="minutos">{formatarTempo(temporizadorArtemisThree.minutos)}</p>
                                <span>minutos</span>
                            </div>
                            <div className="temporizador segundos-c">
                                <p className="text" id="segundos">{formatarTempo(temporizadorArtemisThree.segundos)}</p>
                                <span>segundos</span>
                            </div>
                        </div>
                    </div> 
                    <div className="descricao-missao caixa">
                            <h2>Descrição</h2>
                            <p>{artemisTres.descricao}</p>    
                    </div>  
                    </div>
                    <div className="tab-pane fade show " id="missaoA" role="tabpanel" aria-labelledby="missaoA-tab">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="titulo-missao">Missão A</h1>
                            </div>
                        </div>

                        <div className="teste-progresso">
                            <div className="progress-circular" style={{
                            background: `conic-gradient(#44394d ${progressmissaoA.angulo}deg, #ededed 0deg)`,
                        }}> 
                                <span className="value">{progressmissaoA.percentage.toFixed(2)}%</span>
                            </div>
                            <div className="temporizador-container">
                                <div className="temporizador dias-c">
                                    <p className="text" id="dias">{formatarTempo(temporizadormissaoA.dias)}</p>
                                    <span>dias</span>
                                </div>
                                <div className="temporizador horas-c">
                                    <p className="text" id="horas">{formatarTempo(temporizadormissaoA.horas)}</p>
                                    <span>horas</span>
                                </div>
                                <div className="temporizador minutos-c">
                                    <p className="text" id="minutos">{formatarTempo(temporizadormissaoA.minutos)}</p>
                                    <span>minutos</span>
                                </div>
                                <div className="temporizador segundos-c">
                                    <p className="text" id="segundos">{formatarTempo(temporizadormissaoA.segundos)}</p>
                                    <span>segundos</span>
                                </div>
                            </div>
                        </div>   
                        <div className="descricao-missao caixa">
                            <h2>Descrição</h2>
                            <p>{missaoA.descricao}</p>    
                        </div>
                    </div>
                    <div className="tab-pane fade show " id="missaoB" role="tabpanel" aria-labelledby="missaoB-tab">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="titulo-missao">Missao B</h1>
                            </div>
                        </div>
                        <div className="teste-progresso">
                            <div className="progress-circular" style={{
                            background: `conic-gradient(#44394d ${progressmissaoB.angulo}deg, #ededed 0deg)`, 
                        }}> 
                                <span className="value">{progressmissaoB.percentage.toFixed(2)}%</span>
                            </div>
                            <div className="temporizador-container">
                                <div className="temporizador dias-c">
                                    <p className="text" id="dias">{formatarTempo(temporizadormissaoB.dias)}</p>
                                    <span>dias</span>
                                </div>
                                <div className="temporizador horas-c">
                                    <p className="text" id="horas">{formatarTempo(temporizadormissaoB.horas)}</p>
                                    <span>horas</span>
                                </div>
                                <div className="temporizador minutos-c">
                                    <p className="text" id="minutos">{formatarTempo(temporizadormissaoB.minutos)}</p>
                                    <span>minutos</span>
                                </div>
                                <div className="temporizador segundos-c">
                                    <p className="text" id="segundos">{formatarTempo(temporizadormissaoB.segundos)}</p>
                                    <span>segundos</span>
                                </div>
                            </div>
                        </div> 
                        <div className="descricao-missao caixa">
                            <h2>Descrição</h2>
                            <p>{missaoB.descricao}</p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Missões;