import React, { useEffect } from "react";

import "./Terms.css";
import image from "../assets/desktop/Other/Texture_tail.webp";
import buttonlayout from "../assets/registration/Button_Continuar.webp";
import brushNavMenu from "../assets/desktop/Registro/COD_M_Rulebook.png";
import table from "../assets/desktop/Registro/Table.png"
import { useNavigate } from "react-router";
const RulesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const termsText = `Introducción
Este es el único reglamento oficial del Torneo COD:M Barrios Latinos y rige a todos los participantes y partidas dentro de la competencia.
La administración podrá modificar o actualizar estas reglas en cualquier momento, para garantizar la integridad del evento.
Asimismo, podrá tomar decisiones no previstas en este reglamento para salvaguardar el juego limpio y la integridad del torneo.
Todos los jugadores aceptan plenamente las decisiones de los organizadores, incluyendo la interpretación de este reglamento. Dichas decisiones serán finales e inapelables. Cualquier situación no contemplada será resuelta por los organizadores en el momento del incidente, con carácter definitivo.
OFFICIAL RULEBOOK – QUALIFIERS

1. Elegibilidad
1.1 Los participantes deberán:
Ser residentes legales del país al que representan.
Países elegibles: México, Argentina, Chile, Colombia, Perú y Ecuador.
Cumplir con los requisitos de edad establecidos por el organizador:
Tener 18 años cumplidos al momento de su inscripción al torneo, misma que deberán comprobar con documentación oficial que certifique su fecha de nacimiento.
Contar con una cuenta válida de Call of Duty: Mobile en su teléfono móvil (No se admiten otras plataformas).
Contar con una cuenta de Discord y unirse al servidor oficial del evento.
Competir únicamente con su propia cuenta y nombre único de jugador, pudiendo registrar solo una cuenta de COD Mobile. De lo contrario: la cuenta quedará bloqueada durante todo el torneo y no podrá cambiarse bajo ninguna circunstancia. Asimismo, el nombre de jugador debe ser único y podrá ser rechazado si resulta ofensivo, inapropiado o infringe derechos de autor.
Tener en orden todos los papeles pertinentes para viajar (Visa, Pasaporte, etc.)
Aceptar que el organizador podrá tomar las medidas disciplinarias correspondientes, incluyendo la exclusión del evento, en caso de incumplir el reglamento sin derecho a apelación.
Aceptar todos los presentes términos y condiciones descritos en este reglamento.


1.2 El organizador podrá solicitar documentación oficial para validar:
Nacionalidad o residencia.
Identidad.
Cumplimiento de requisitos.

2. Registro y Selección
2.1 El registro estará abierto para hasta 300 jugadores por país.
2.2 De los registrados, se seleccionarán 200 jugadores oficiales por país por medio de los siguientes criterios:
Validación de país / código postal.
Criterios de engagement activo.
(Publicaciones en redes sociales, Referencias, etc.)
Otros criterios definidos por el organizador.
(Nivel de Cuenta, Historial, Veracidad de los usuarios, etc.)
2.3 Todos los usuarios deberán registrarse única y exclusivamente por medio de la página oficial de “COD:M Barrios Latinos” (Link de la página).

2.3.1 Los registros estarán abiertos oficialmente desde el día 20/Febrero/2026 a las 00:00 horas GMT-6 (Hora estándar de la Ciudad de México) hasta el día 05/Marzo/2026 a las 23:59 horas GMT-6 (Hora estándar de la Ciudad de México).
2.3.2 Horarios de registros por país:
Argentina y Chile (GMT-3) (considerando horario estándar, sin ajuste de verano)
Inicio de registros: 20 de Febrero de 2026 – 03:00 
Fin de registros: 6 de Marzo de 2026 – 02:59

Perú, Colombia y Ecuador continental (GMT-5)
Inicio de registros: 20 de febrero de 2026 – 01:00
Fin de registros: 5 de marzo de 2026 – 00:59
2.4 Todos los jugadores registrados deberán unirse al servidor oficial de discord (Link del discord) del torneo “COD:M Barrios Latinos” con al menos 48 horas de antelación, previa al inicio de las clasificatorias.
2.5 Cada país contará con un total de 200 jugadores participantes, distribuidos en dos lobbies (partidas battle royale), aplicable a México, Argentina, Chile y Colombia. En el caso de las regiones conformadas por Ecuador y Perú (La Tropa Andina), el límite será igualmente de 200 jugadores en total. 
2.6 La selección inicial otorga a los jugadores el derecho a participar en los Qualifiers; sin embargo, la asignación del cupo oficial se realizará estrictamente por orden de llegada al servidor, hasta completar un máximo de 100 jugadores por lobby.

2.7 Una vez alcanzado el cupo máximo de participantes, aquellos jugadores que no hayan recibido el rol oficial de “Jugador” serán incorporados automáticamente a la lista de espera.
2.8 En caso de liberarse espacios antes del día del evento, los cupos disponibles se asignarán a los jugadores en lista de espera, respetando estrictamente el orden de llegada al servidor.
2.9 Todos los jugadores deberán permanecer atentos a su correo electrónico, al servidor oficial y a los anuncios publicados en los canales oficiales de comunicación para cualquier notificación relacionada con su estatus de participación.
2.10 Las decisiones del organizador serán finales e inapelables.

3. Formato Competitivo – Qualifiers

3.1 Horarios y Fechas

Las fechas para los Qualifiers por país son:

Día 1: México y Argentina: 6 de Marzo del 2026 a las 17:00 horas GMT-6 (Hora estándar de la Ciudad de México)
Día 2: Chile, Colombia y Tropa Andina: 7 de Marzo del 2026 17:00 horas GMT-6 (Hora estándar de la Ciudad de México)
Horarios de clasificatorios por país:

Argentina y Chile (GMT-3) (considerando horario estándar, sin ajuste de verano)
Día 1: 6 de Marzo del 2026 – 20:00 horas
Día 2: 7 de Marzo del 2026 - 20:00 horas

Perú, Colombia y Ecuador continental (GMT-5)
Día 1: 6 de Marzo del 2026 – 18:00 horas
Día 2: 7 de Marzo del 2026 - 18:00 horas

3.2 Resumen de formato:
Todos los Países jugarán 3 partidas Battle Royale en total, se dividirán los 200 Jugadores seleccionados en 2 Lobbys de 100 Jugadores cada uno, de los cuales el Top 20 avanza a el Battle Royale Final, en el cual se enfrentarán 40 jugadores en el mapa de Alcatraz, de los cuales sólo el Top 5 tendrá la oportunidad de ir a la Gran Final Presencial IRL.

`

const termsText2 = `
3.3 Los jugadores del Top 5 del Battle Royale 3 serán los finalistas oficiales de su país que avanzarán a la Gran Final Presencial IRL.
3.4 Sólo los resultados oficiales del servidor validado por Activision serán considerados para definir a los finalistas.

4. Seed Winner (Ranking Regional)
4.1 Durante el BR3 (Alcatraz):
Se sumarán exclusivamente las kills obtenidas por los Top 5 finalistas de cada país.
Ese total determinará el ranking regional.
4.2 El país con mayor número total de kills:
Obtendrá el Seed Winner.
Será sembrado en posición preferencial para la IRL Grand Final.
4.3 Los 4 Países restantes:
Serán seedeados según la suma de las kills de su top 5 en orden descendente. Ej: (País B: 40 Kills País C: 35 Kills País D: 30 Kills País E: 20 Kills)

5. Criterios de Desempate
En caso de empate en kills totales:
 a) Se considerará al jugador con mayor número individual de kills en BR3.
 b) De persistir el empate, se utilizarán estadísticas oficiales de Activision.
 c) De ser necesario, el organizador definirá el desempate final.

6. Conducta y Responsabilidades
6.1 Está prohibido:
Uso de hacks, cheats o software externo.
Manipulación de resultados.
Difundir información falsa por medio de los canales de información oficiales.
El uso de otras plataformas aparte de las permitidas.
Manipulación de resultados.
Cualquier intento de engaño hacia la organización.
Conducta antideportiva.
El uso de múltiples cuentas.


6.2 Responsabilidades:
Presentarse en el servidor oficial de Discord al menos 15 minutos antes del evento.
Hacer Check-In en el servidor oficial de Discord antes de entrar a partida.
Comportarse de forma adecuada por medio de los canales oficiales de comunicación del torneo.
Reportar resultados de fin de partida por medio del canal “Reporte de resultados” de Discord.
Hacer Check-In en el servidor oficial de Discord antes de entrar a partida.
Competir sólamente con la cuenta registrada.
Una vez confirmado el registro, no se podrá cambiar el nombre de jugador de COD: Mobile durante el torneo.

6.3 El organizador se reserva el derecho de descalificar a cualquier jugador que incumpla estas reglas, conforme a lo establecido en el presente apartado.

7. Streaming y Derechos
7.1 Todos los Qualifiers serán transmitidos en stream.
7.2 Los participantes aceptan:
Uso de su imagen, voz y gameplay.
Uso promocional sin compensación adicional.

8. Decisiones Oficiales
Las decisiones del staff, observers y organizador son finales.

9. Mecánica de Premiación
El jugador deberá contar con la disponibilidad y documentación necesaria para viajar a la final presencial en México. En caso de no poder hacerlo por cualquier motivo, perderá el derecho a reclamar cualquier premio, apoyo o viaje asociado, y su lugar será otorgado al siguiente jugador en la clasificación correspondiente.

OFFICIAL RULEBOOK – IRL GRAND FINAL

1. Fecha
El “IRL Grand Final” se jugará en formato presencial el día 18 de Abril del 2026 en la Ciudad de México.
2. Estructura General
Participan 5 equipos clasificados desde Qualifiers:
México
Chile
Argentina
Colombia
Tropa Andina (Perú y Ecuador)
Cada equipo estará conformado por:
1 KOL Capitán
5 Jugadores COD Mobile (4 Titulares y 1 Banca)
1 MC
El orden del bracket será determinado por el Seed obtenido en Qualifiers.

3. PLAYOFFS – Formato

Los países se enfrentarán en un bracket de doble eliminación, donde cada enfrentamiento incluye una batalla de freestyle y una partida de COD Mobile en el modo de juego “Dominación", cada victoria otorga 3 puntos, el primer equipo en llegar a 6 puntos avanza a la siguiente ronda y en caso de empate, se juega una segunda partida de COD Mobile en el modo de juego “Dominación".

Sistema de:
Winners Bracket
Losers Bracket
Cada Matchup incluye:
MC Freestyle Battle (5 min)
COD Mobile – Dominación (10 min)
Desempate: COD Mobile – Dominación (10 min)
Sistema de puntos por Matchup:
CODM Win: 3 puntos
MC Win: 3 puntos
Equipo Ganador:
El primer equipo en conseguir 6 puntos.
En caso de empate:
Se juega otra partida de COD Mobile – Dominación.
El ganador del Winners Final y el ganador del Losers Final avanzan a la Gran Final.

4. Nerf Cards

Las “Nerf Cards” son modificaciones especiales a la partida que afectan a ambos equipos por igual, estas son seleccionadas por el MC ganador de la batalla de Freestyle antes de cada partida de COD Mobile.

4.1 Antes de cada match:
El ganador del MC Battle elige la Nerf Card.
Se seleccionarán 1 o más Nerf Cards.
Validación por panel oficial.

4.2 Las Nerf Cards pueden incluir:
Only Snipers
Only Assault Rifles
Only Shotguns
HP 300 + Throwables infinitos
Ajustes especiales (ej. gravedad 500%)
4.3 Los jugadores deberán crear loadouts que cumplan con las restricciones de las “Nerf Cards” previo a comenzar sus partidas.

5. Sistema de Sanciones
5.1 Un Referee oficial supervisará el cumplimiento de las “Nerf Cards”.
5.2 Si se infringe una Nerf Card:
1ª Infracción: Tarjeta Amarilla
Tarjeta Amarilla: El round continúa a discreción de la organización.
3ª Amarilla: Tarjeta Roja
Tarjeta Roja = Pérdida automática del match
5.3 Si se detecta ventaja directa tras una tarjeta amarilla:
El round podrá invalidarse y reiniciarse.
5.4 Observers oficiales validarán evidencia.

6. GRAN FINAL “FINALE” – First to 5 Points
La Gran Final consta de 2 partidas de COD: Mobile y una Batalla de Freestyle, una victoria de COD Mobile otorga 2 Puntos y la victoria de la Batalla de Freestyle otorga 3 Puntos, el primer equipo en alcanzar 5 puntos gana el campeonato, en caso de un pseudo empate (4-3) se juega una partida más de COD: Mobile.

Estructura de Matches
CODM – Domination (2 pts)
CODM – Hardpoint (2 pts)
MC Freestyle Battle (3 pts)
CODM – Search & Destroy (2 pts, solo si necesario)



Resolución
El MC puede definir el campeonato.
Si ambos equipos llegan a un pseudo empate (4-3):
El último mapa CODM define al campeón.
Las decisiones del staff son finales e inapelables.

7. Conducta IRL
7.1 Está prohibido:
Conducta violenta.
Agresión verbal o física.
Sabotaje técnico.
Uso de hacks, cheats o software externo.
Manipulación de resultados.
Incumplimiento de instrucciones del staff.
Incumplimiento de horarios asignados.
Cualquier intento de engaño hacia la organización.
Conducta antideportiva.
Compartir cuentas.
7.2 Responsabilidades:
Presentarse en el venue del evento en el horario definido por el staff.
Estar atento a las indicaciones por medios digitales previo a presentarse en el venue.
Comportarse de forma adecuada.
Estar atento a las indicaciones proporcionadas por el staff en todo momento.

El organizador podrá tomar las medidas disciplinarias correspondientes, incluyendo la exclusión del evento, en caso de incumplir el código de conducta y/o las responsabilidades pertinentes.

8. Derechos de Imagen
Los equipos aceptan:
Uso de imagen, voz y contenido en transmisiones y piezas promocionales.

9. Premiación
TBD.


ANEXO OFICIAL – CASOS ESPECIALES & CONTINGENCIAS
Este anexo complementa el Rulebook oficial y establece los protocolos ante situaciones excepcionales o no previstas.

1. FALLAS TÉCNICAS – QUALIFIERS (ONLINE)
1.1 Desconexión Individual – BR1 / BR2
Si un jugador se desconecta:
No se reiniciará el Battle Royale.
El jugador podrá reincorporarse únicamente si el sistema lo permite.
El resultado oficial será el registrado por el servidor.

1.2 Desconexión Masiva (Más del 20% del lobby)
Si se detecta caída masiva por:
Fallo de servidor
Fallo técnico general
Problema confirmado por Activision
El staff podrá:
a) Reiniciar el BR completo
 b) Repetir el BR desde lobby nuevo
 c) Reprogramar el match
La decisión será tomada por el Head Admin y es inapelable.

1.3 Fallo en BR3 (Alcatraz – Seed Determination)
Dado que BR3 define:
Top 5 del país
Ranking de Seed
Si el fallo ocurre antes del minuto 5:
 → Se reinicia el BR completo.
Si ocurre después del minuto 5:
 → El staff podrá validar resultados parciales oficiales si:
El servidor registra kills válidas
No existe ventaja desproporcionada
En caso de duda:
 → Se repetirá el BR.

2. EMPATES EXTREMOS – QUALIFIERS
2.1 Empate en Kills Totales para Seed
Ya contemplado en Rulebook:
Mayor kill individual
Estadísticas oficiales Activision
Si persiste el empate:
 → Se podrá jugar un 1v1 Domination (5 min) entre jugadores con mayor kill.

3. FALTA DE JUGADOR / NO SHOW – QUALIFIERS
Si un jugador clasificado al BR3 no se presenta:
Su lugar no será reemplazado.
Se juega con el lobby reducido.
No se permitirá sustitución.

4. PLAYOFFS – IRL GRAND FINAL
4.1 Fallo Técnico en Domination (IRL)
Si ocurre antes del minuto 3:
 → Restart completo del mapa.
Si ocurre después del minuto 3:
 → Se evaluará:
Score actual
Control de zonas
Diferencia mayor a 30%
El staff decidirá si:
Se reinicia
Se valida resultado parcial
Se juega tiempo restante

4.2 Empate Persistente en Playoffs
Si tras MC Battle + Domination + Domination adicional persiste empate técnico:
 → Se jugará un Domination “Sudden Death” de 5 minutos.
 → Sin Nerf Card adicional.

5. FINALE – FIRST TO 5
5.1 Pseudo Empate 4 – 3
Ya previsto:
 → El último mapa CODM define.

5.2 MC No Se Presenta
Si un MC no se presenta:
El equipo pierde automáticamente los 3 puntos del MC Battle.
No se permitirá sustitución de MC en Finale.
En Playoffs podrá utilizarse MC alterno previamente registrado.

5.3 Desconexión en Search & Destroy (Finale)
Si ocurre antes de la ronda 3:
 → Restart completo.
Si ocurre después:
 → Se mantiene marcador parcial y se reanuda desde siguiente ronda.

6. NERF CARDS – INCUMPLIMIENTOS
6.1 Carga Incorrecta
Si un jugador entra con loadout ilegal:
Se otorga tarjeta amarilla.
El round continúa.
Si se detecta ventaja directa:
 → El round podrá invalidarse.

6.2 Manipulación Intencional
Uso deliberado para forzar tarjeta roja:
→ Descalificación inmediata del equipo.

7. CONDUCTA IRL
7.1 Agresión Física o Verbal
→ Descalificación inmediata.
 → Expulsión del venue.
 → Reporte formal.



7.2 Sabotaje Técnico
Intento de:
Manipular dispositivos
Interrumpir señal
Alterar conexión
→ Descalificación inmediata.

8. FUERZA MAYOR
En caso de:
Fallo eléctrico general
Problema de venue
Interrupción de transmisión
Emergencia médica
Situación de seguridad
El organizador podrá:
 a) Pausar el evento
 b) Reprogramar
 c) Ajustar formato
 d) Declarar ganador con base en resultados oficiales previos

9. AUTORIDAD FINAL
Todas las decisiones finales recaen en:
Head Admin
Production Lead
Representante oficial del organizador
Las decisiones son finales e inapelables.


10. CLÁUSULA DE FLEXIBILIDAD
El organizador se reserva el derecho de:
Modificar reglas por motivos técnicos u operativos.
Ajustar tiempos de match.
Ajustar Nerf Cards si alguna afecta la estabilidad del juego.
Siempre priorizando:
Fair play
Competencia equilibrada
Experiencia del público
`

  return (
    <div style={{ backgroundImage: `url(${image})`, padding: "20px" }}>
      <div style={{ width: "100%", minHeight: "150px" }}></div>

      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={brushNavMenu}
          style={{
            overflow: "visible",
            objectFit: "cover",
            width: "100%",
            opacity: 1,

            maxWidth: "400px",
          }}
          alt="Close"
        />
      </div>

      <div style={{ padding: "20px", paddingLeft: "10%", paddingRight: "10%" }}>
        <div className="inter-font" style={{ color: "white" }}>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              fontFamily: "inherit",
              fontSize: "14px",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            {termsText}
          </pre>

          <div style={{width: "100%", display: "flex", justifyContent: "center", marginBottom: "20px",}}><img src={table} alt="Table" /></div>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              fontFamily: "inherit",
              fontSize: "14px",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            {termsText}
          </pre>
        </div>
      </div>

      <>
        <div
          onClick={() => navigate("/")}
          style={{
            maxHeight: "70px",
            display: "flex",
            marginTop: "40px",
            justifyContent: "center",
          }}
          className="buttonLayoutInstructions"
        >
          <div>
            <img
              loading="lazy"
              src={buttonlayout}
              style={{ height: "64px" }}
              alt="Cerrar"
            />

            <p
              className="guild-font"
              style={{
                fontSize: "12px",
                color: "#EDCC00",
                position: "relative",
                top: "-43px",
                right: "-33px",
              }}
            >
              REGRESAR
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default RulesPage;
