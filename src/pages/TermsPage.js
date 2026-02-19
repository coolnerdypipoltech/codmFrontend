import React, { useEffect } from "react";

import "./Terms.css";
import image from "../assets/desktop/Other/Texture_tail.webp";
import buttonlayout from "../assets/registration/Button_Continuar.webp";
import brushNavMenu from "../assets/desktop/Registro/Términos y condiciones.webp";
import { useNavigate } from "react-router";
const TermsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const termsText = `
Términos y condiciones del Torneo COD:M Barrios Latinos, auspiciado por Infinix NOTE 60 Series

1. Aceptación y ámbito de aplicación: Los presentes términos y condiciones (en adelante, los Términos) rigen la participación en la experiencia del Torneo COD:M Barrios Latinos, auspiciado por Infinix NOTE 60 Series (en adelante, el Torneo). Al acceder y registrarte en el sitio web del Torneo, participar en las fases en línea y sin conexión, asistir a un evento presencial, o recibir algún beneficio tras participar en el Torneo, aceptas los Términos. Si no aceptas los Términos, te instamos a no registrarte ni participar. Los presentes Términos constituyen un acuerdo entre tú y Actbliz México S. de R.L. de C.V. (en adelante, el Organizador).

2. Organizador y contacto Organizer: Actbliz México S. de R.L. de C.V.
Address: Tihuatlán 41-602, Col. San Jerónimo Aculco, Alcaldía Magdalena Contreras, C.P. 10400, in Mexico City, Mexico
Sitio web del torneo: https://codmbarrioslatinos.com

3. Definiciones
'Administración' engloba al Organizador y sus funcionarios, directores, empleados, contratistas, árbitros, personal de producción, personal de la sede y representantes designados y autorizados que fungen dentro del ámbito de aplicación del Torneo.

'Afiliado' engloba a cualquier entidad que, directa o indirectamente, controle, sea controlada por o esté bajo el control común del Organizador. 'Control' significa la propiedad de más del cincuenta por ciento de los derechos de voto o el poder de toma de decisiones directas en la gestión.

'Ley aplicable' engloba todas las leyes, reglamentos, normas, decretos, códigos, decisiones judiciales y directrices vigentes del Torneo, incluidos, entre otros: protección al consumidor, eventos públicos, protección de datos, leyes contra la corrupción, sanciones y leyes migratorias.

'Battle Royale' se refiere al modo de juego de Call of Duty: Mobile que determinó el Organizador para las Eliminatorias Regionales o la Final.

'Multijugador' se refiere al formato del modo de juego competitivo de Call of Duty: Mobile que determinó el Organizador para las Eliminatorias Regionales o la Final.

'Eliminatorias Regionales' se refiere a la etapa de eliminación por país o región que se lleva a cabo en el modo de juego Battle Royale, la cual concluye en una partida decisiva para determinar a los participantes clasificados.

'Reglas de integridad competitiva' engloba todas las reglas, políticas, normas de cumplimiento y determinaciones de los árbitros que estableció el Organizador para proteger la imparcialidad, el balance competitivo y el orden operativo.

'Sede del Evento' se refiere a la ubicación física que determinó el Organizador para llevar a cabo las etapas presenciales del Torneo.

'Evento de fuerza mayor' se refiere a cualquier situación que se encuentra fuera del control razonable, entre los que se incluye: apagones, interrupciones en la red, actos gubernamentales, órdenes de la autoridad civil, desastres naturales, protestas laborales, restricciones de viaje, urgencias en materia de salud pública, o sede inaccesible.

'Evento improvisado' se refiere a cualquier presentación en vivo, batalla de rap o elemento competitivo ajeno al juego que se incorporó en las etapas presenciales del Torneo.

'Juego' se refiere a Call of Duty: Mobile, disponible a través de la distribuidora correspondiente según sus propios términos y políticas.
'Cuenta del juego' se refiere a una cuenta de usuario válida y necesaria para acceder al Juego y participar en él.
'Gran Final' se refiere a la etapa competitiva final y presencial que se lleva a cabo en México, la cual se estructuró con un sistema de puntos que se describe en los presentes Términos.
'Propiedad intelectual' se refiere a los derechos de autor, marcas registradas, marcas de servicio, nombres comerciales, nombres de dominio, imágenes comerciales, patentes, diseños, software, obras audiovisuales, entre otros derechos propietarios que sean reconocidos bajo la Ley aplicable.
'Menor de edad' se refiere a cualquier persona que tenga menos de dieciocho (18) años.
'Tarjetas de debilitación' se refiere a modificadores competitivos que se aplican bajo la supervisión del Organizador antes de las partidas designadas durante la Gran Final.
'Organizador' se refiere a la entidad legal identificada en los presentes Términos, la cual es responsable de administrar y dirigir el Torneo.
'Participante' se refiere a cualquier persona que se registra, valida o participa en cualquier etapa del Torneo.
'Datos personales' se refiere a la información relacionada con una persona natural identificada o identificable, la cual se recopiló en relación con el Torneo.
'Términos de la plataforma' se refiere a las reglas de la distribuidora y de la plataforma que rigen el acceso y el uso del Juego.
'Playoffs' se refiere a la primera etapa de eliminación presencial en el que se emplea un formato de competición progresivo de llaves y mixto.
'Sistema de puntos' se refiere al mecanismo de puntuación en el que el primer equipo en alcanzar el umbral de puntos designado es nombrado campeón.
'Conducta prohibida' se refiere a las trampas, manipulación de partidas, acoso, fraude, abuso, conducta ilícita, o infracción de las Reglas de integridad competitiva.
'Recompensa' se refiere a objetos dentro del juego, viáticos, reconocimiento, u otros beneficios entregados en relación con el Torneo.
'Leyes sobre sanciones' se refiere a leyes sobre sanciones económicas, control de exportación o restricciones comerciales que están bajo la administración de las autoridades competentes, las cuales son vigentes tanto para el Organizador como los Participantes.
'Contenido para transmisión' se refiere a la transmisión audiovisual en vivo o grabada del Torneo o de contenido relacionado.
'Interrupciones técnicas' se refiere a la interrupción o mal funcionamiento que afecte al juego, la transmisión, el puntaje o la producción del evento.
'Torneo' se refiere a la experiencia competitiva 'COD:M Barrios Latinos, auspiciado por Infinix NOTE 60 Series' que se describe en los presentes Términos, la cual incluye todas las etapas y las actividades relacionadas.
'Proceso de validación' se refiere a la revisión por parte del organizador de la elegibilidad de los Participantes, sus declaraciones y documentos de apoyo en caso de ser requeridos.
'Reglas de la sede' se refiere a las políticas y los requisitos de funcionamiento que impone la Sede del evento.
'Canales oficiales de comunicación' se refiere al medio de comunicación principal entre el Organizador y los participantes.
'Dispositivo oficial del torneo' se refiere al dispositivo que proporciona el Organizador, cuyo uso será obligatorio para cada participante con el fin de garantizar la igualdad competitiva.

4. Elegibilidad y representaciones
4.1 Edad requerida: la participación en el Torneo como competidor está restringida a personas que hayan cumplido al menos dieciocho (18) años al momento de registrarse.
4.2 Países y regiones; residencia; elegibilidad de viaje: La participación como competidor está restringida a personas que residan legalmente en México, Argentina, Chile, Colombia, Perú o Ecuador al momento de registrarse y durante el Torneo. Con fines competitivos, los participantes que residan legalmente en Perú y Ecuador no competirán por separado; en cambio, serán agrupados y competirán de forma colectiva como un solo equipo denominado como 'Tropa Andina'. El Organizador tiene la facultad de solicitar una certificación de residencia o documento de identidad razonables en cualquier momento, incluso antes de cualquier etapa presencial, y tiene la facultad de descalificar a los Participantes que incumplan o que se rehúsen a completar la verificación. Se verá condicionada la participación presencial en México, que incluyen los Playoffs y la Gran Final, para los Participantes que viajen, ingresen y permanezcan legalmente en México durante las fechas estipuladas. Cada Participante se responsabilizará, por cuenta propia, de obtener y mantener segura su documentación de viaje e inmigración necesaria, que incluye lo siguiente: un pasaporte válido, visas solicitadas, autorizaciones, permisos de ingreso, autorizaciones parentales de ser requeridas para el viaje (incluso si se cumplen los demás requisitos) y cumplimiento de los requisitos de viaje y de aduanas. Si un Participante no puede cumplir de manera oportuna cualquiera de los requisitos de viaje o inmigración mencionados anteriormente, el Organizador tiene la facultad de negarle su participación presencial, sustituirlo por otro Participante de acuerdo con el formato del Torneo y considerarlo inelegible para recibir Recompensas, beneficios o viáticos. El Organizador se deslinda de toda responsabilidad en la medida en que lo permita la ley aplicable.
4.3 Representación y garantías del Participante: Al registrarte o participar, representas y garantizas que:
(a) cumples con los requisitos de elegibilidad y toda la información presentada es verídica, exacta y vigente;
(b) tienes la capacidad y autoridades legales íntegras para participar y aceptar los presentes Términos;
(c) tu participación no infringe ningún contrato, deber u obligación que debas a terceros;
(d) cumplirás con las leyes aplicables, los términos de la plataforma, las reglas de la sede y las indicaciones de la Administración;
(e) no te encuentras bajo sanciones o restricciones para que hagan que tu participación, viaje o recepción de Recompensas se consideren ilegales, y no figuras en ninguna lista de sanciones vigente para el Torneo o el Organizador.
4.4 Validación de la elegibilidad y sustitución: El Organizador, en cualquier momento y en su facultad, puede verificar el estado de elegibilidad, incluso durante o después de la selección para una etapa presencial. Si incumples la verificación o se te considera inelegible, el Organizador te descalificará y ejercerá mecanismos de sustitución de manera consistente con el formato del Torneo.
4.5 Registro y validación del correo electrónico: Debes completar el registro en el sitio web oficial del Torneo que determinó el Organizador para este Torneo. El registro solicita que se complete el formulario en línea con información verídica, exacta y vigente, además de completar el paso de validación de correo electrónico. Se necesita validar el correo electrónico para poder participar en la etapa presencial. En la etapa inicial de registro, no necesitan subirse documentos de apoyo; el Organizador solicitará posteriormente la verificación de elegibilidad, el estatus de viaje y la participación presencial.

5. Registro y validación del correo electrónico: Para participar, debes registrarte en el canal de registro oficial del Torneo que determinó el Organizador y completar los pasos necesarios, que incluye la validación de un correo electrónico. Se necesita validar un correo electrónico para participar en cualquier etapa presencial, como se indica en la Sección 4.3. Durante el registro inicial, no es necesario subir documentos de apoyo. El Organizador solicitará posteriormente la verificación de elegibilidad, la disposición para viajar y la participación presencial.

6. Estructura del Torneo y discreción operativa
6.1 Etapas:
El Torneo consta de cuatro (4) etapas consecutivas:
(a) Etapa 1 - Registro: Registro satisfactorio en el sitio web oficial del Torneo.
(b) Etapa 2 - Eliminatorias Regionales: Etapa competitiva en línea que se transmite en los canales oficiales del Juego y que se lleva a cabo en el modo de juego Battle Royale, la cual culmina con una partida decisiva en el mapa Alcatraz de Battle Royale.
(c) Etapa 3 - Playoffs: Llave de eliminación presencial que combina partidas Multijugador y batallas de improvisación.
(d) Etapa 4 - Gran Final: El evento presencial final que se llevará a cabo en México, que presenta un sistema acumulativo de puntos de las partidas Multijugador y las batallas de improvisación.
6.2 Norma de discreción operativa: El Organizador se reserva la facultad exclusiva y razonable de administrar y dirigir el Torneo, que incluye los detalles del formato, el calendario, el cumplimiento, las decisiones de integridad, las comunicaciones con los participantes, y la interpretación y aplicación de los presentes Términos, en cada caso individual sujetos a las leyes aplicables y los derechos legales irrenunciables. El Organizador tiene la facultad de implementar controles razonables para salvaguardar la seguridad, la integridad y el cumplimiento.

7. Selección, clasificación y criterios de avance
7.1 Finalistas regionales (cinco mejores): Para cada país o región elegible, los cinco (5) participantes con mayor puntuación en la batalla decisiva del mapa Alcatraz del modo Battle Royale, como parte de las Eliminatorias Regionales, serán designados como los finalistas de ese país o región en el marco de este torneo. Las clasificaciones se determinarán de acuerdo con los resultados de las partidas que se registraron en el Juego y en la transmisión oficial o canal de transmisión que administre el Organizador.
7.2 Clasificación del país para asignación de posiciones: Para la asignación de posiciones en las etapas posteriores, se clasificará a cada país o región elegible según el 'Total de eliminaciones del país', que se calcula como la suma de las eliminaciones que lograron los cinco (5) finalistas del país o región únicamente durante la partida decisiva en el mapa Alcatraz de Battle Royale. Las eliminaciones o resultados de otras partidas o etapas no se contarán en este cálculo.
7.3 Resolución de empates: Si el 'Total de eliminaciones del país' de dos o más países o regiones resulta en un empate, este se resolverá a favor del país o región cuyo único finalista haya registrado el conteo individual de eliminaciones más alto en la partida decisiva del mapa Alcatraz de Battle Royale. Si sigue habiendo un empate tras haber aplicado la regla anterior, el Organizador ejercerá un método adicional de resolución objetiva de empates que la Administración haya anunciado para la etapa en cuestión. La resolución se realizará mediante el uso de datos registrados en el juego, los registros de la transmisión oficial y las estadísticas dentro del juego que proporcionaron los participantes, quienes se comprometen a entregarlos de manera oportuna y auténtica.
7.4 Validación y avance condicional: La asignación de finalistas, el avance y los viáticos están sujetos a la validación satisfactoria por parte del Organizador, que incluye la confirmación de la edad legal, residencia, disponibilidad de viajar, validez del pasaporte, validez de la visa (de ser requerida) y la elegibilidad de inmigración. Si un Participante incumple la validación, es inelegible o no proporciona de manera oportuna la verificación solicitada, el Organizador tiene la facultad de descalificarlo, retirarle los beneficios asociados e implementar sustituciones o ajustes a las llaves de acuerdo con el formato del Torneo y los requisitos de integridad.
7.5 Cuenta del Juego para el Torneo en la Final: Todos los participantes usarán una cuenta especial de COD:M que les facilitará el Organizador para participar en la Final con el fin de garantizar una competencia justa. Esta cuenta tendrá todos los objetos dentro del juego que se necesitan para participar y se regresará el control de ella a los Organizadores tras finalizar el evento. Esto no aplica para la etapa de Eliminatorias, en la que cada jugador podrá utilizar su cuenta personal del juego.

8. El Organizador, mediante la Administración, puede establecer y comunicar las reglas de la partida, los ajustes del juego, los parámetros de competencia, el calendario, los requisitos de registro, los requisitos técnicos y las instrucciones de operación vigentes en cada etapa del Torneo, que incluyen las reglas cuyo propósito es preservar la integridad competitiva y prevenir la manipulación de partidas. Los Participantes deben competir de manera justa y se les insta a no hacer trampa ni aprovechar el uso de errores o fallas. Además, se prohíbe lo siguiente: uso de software, hardware, periféricos, emuladores, scripts y macros no autorizados, manipulación mediante el uso de una VPN, uso de cuentas compartidas, aumento artificial de nivel, cuentas secundarias, stream sniping, consejos/entrenamiento no autorizado, coludir, sobornar, amenazar, acosar o cometer cualquier conducta negativa que afecte la integridad, imparcialidad, seguridad o reputación del Torneo.
El Organizador tiene la facultad de supervisar las partidas, revisar los datos, las comunicaciones y otra información relevante dentro del juego que esté a su disposición o a disposición de sus proveedores de servicios. También tiene la facultad de solicitar la cooperación razonable y evidencias de los Participantes, que incluye la verificación de dispositivos y cuentas y la explicación de actividades sospechosas, todo lo anterior sujeto a las leyes aplicables. La Administración tiene la facultad de aplicar sanciones competitivas y medidas disciplinarias en proporción a la conducta y el riesgo de integridad, que incluye advertencias, penalizaciones en el mapa o en las partidas, deducción de puntos, suspensión, expulsión de la partida, descalificación, rescisión de la participación y el retiro de Recompensas y beneficios del Torneo. En las etapas presenciales, la Administración hará uso de un sistema disciplinario de tarjetas amarillas y rojas para determinar las infracciones de conducta y operación; la acumulación de tres (3) tarjetas amarillas resulta en una tarjera roja y la derrota en la partida, según lo determine la Administración. El Organizador tiene la facultad de suspender o descalificar a cualquier Participante en todo momento por incumplimiento de elegibilidad, motivos de integridad, seguridad y cumplimiento legal, falta de cooperación en la validación o investigaciones, o el incumplimiento de los presentes Términos. Las decisiones de la Administración son definitivas en la medida máxima en que lo permita la ley aplicable.

9. Mecánicas de tarjetas de debilitación en la Gran Final: Las Tarjetas de debilitación se usan antes de determinadas partidas. Etapa de Playoffs: Antes de comenzar una partida de Playoffs presencial, se elegirá una (1) o más Tarjetas de debilitación que afectarán a ambos equipos. Esta decisión depende del ganador de la batalla de improvisación que haya determinado un grupo de varios jueces/maestros de ceremonias. Etapa de la Gran Final: Las Tarjetas de debilitación se seleccionarán al azar y las condiciones se modificarán de forma equitativa para ambos equipos. Los participantes deben seguir las indicaciones y restricciones de la Tarjeta de debilitación para la partida correspondiente.

10. Transmisión, grabación y derechos de publicidad
10.1 Jerarquía de transmisiones: Las Eliminatorias Regionales y las etapas presenciales se grabarán y transmitirán en vivo o en diferido. Todas las actividades de transmisión están sujetas a los términos de la plataforma y los requisitos aplicables de la distribuidora.
10.2 Derechos de publicidad y medios de comunicación: Al participar en el Torneo, les cedes al Organizador y a sus representantes un derecho no exclusivo global, exento de regalías, perpetuo e irrevocable para capturar, grabar, reproducir, transmitir, emitir, presentar de manera pública, exhibir, editar y distribuir tu nombre legal, nombre de jugador, apariencia, voz, declaraciones en entrevistas y participación en el juego como parte de la cobertura y la promoción del Torneo.
10.3 Restricciones de transmisión de los participantes: El Organizador tiene la facultad de restringir, demorar o prohibir las transmisiones de los Participantes durante las prácticas o las partidas del Torneo para proteger la integridad, los requisitos de producción, la confidencialidad y el cumplimiento de la plataforma. Debes cumplir con las restricciones mencionadas anteriormente.

11. Autorización limitada de propiedad intelectual y reserva de derechos: Todos los derechos, títulos e intereses con respecto al Juego y la propiedad intelectual y derechos de propiedad asociados, que incluyen las marcas Call of Duty y Call of Duty: Mobile, así como otras marcas registradas, marcas de servicio, nombres comerciales, logotipos y fondos de comercio relacionados, son y seguirán siendo propiedad exclusiva de Activision y sus afiliados, licenciatarios y titulares de derechos. Nada indicado en los presentes Términos transfiere la propiedad de estos derechos a ninguno de los Participantes, y no pueden ser acreedores a estos derechos mediante repercusiones, impedimentos u otras acciones. El Organizador, sujeto a los presentes Términos y los términos vigentes de la plataforma y de la distribuidora, les cede a cada uno de los Participantes un permiso limitado, revocable, sin exclusividad, intransferible y no objeto de una licencia para acceder al Juego y usar materiales proporcionados en el Torneo únicamente y de forma necesaria para participar en el Torneo a través de los canales que determinó el Organizador y dentro del ámbito de aplicación del Torneo. Todas las marcas, formatos, superposiciones, contenido del escenario, materiales creativos, productos y grabaciones del Torneo creados para el Torneo o en relación con él son propiedad de Activision y los titulares de derechos vigentes, por lo que no se les confiere la propiedad a los Participantes. Con la excepción de autorizarse de manera explícita en los presentes Términos, de acuerdo a los términos vigentes de la plataforma y de la distribuidora, y de acuerdo con las indicaciones del Organizador, los Participantes no tienen permitido copiar, modificar, adaptar, distribuir, vender, autorizar, monetizar ni aprovechar de ningún otro modo la propiedad intelectual de Activision, los materiales del Torneo ni sus grabaciones; tampoco tienen permitido registrar ni intentar el registro de marcas similares, alias, dominios ni cuentas de redes sociales que pudieran inducir a confusión; y no tienen la autorización para crear ni publicar contenido que haga pasarse por una afiliación con Activision, el Organizador o el Torneo, o que infrinja las restricciones de producción, de la sede o de confidencialidad que se indicaron para el Torneo. El uso no autorizado o la violación de los derechos de autor dará como resultado la descalificación inmediata y la rescisión de la participación, el retiro de las Recompensas o los beneficios del Torneo, la petición para eliminar contenido bajo solicitud, entre otros recursos al alcance del Organizador y los titulares de derechos vigentes en la medida máxima en que lo permita la ley aplicable. El Organizador, según su propio criterio, se reserva todos los derechos no mencionados de manera expresa a los Participantes, que incluyen los derechos de administrar y modificar la verificación de elegibilidad, la implementación del formato, los mecanismos de cumplimiento y los controles de integridad, todos sujetos a las leyes aplicables.

12. Viaje e inmigración: Se verá condicionada la participación presencial para los Participantes que viajen, ingresen y permanezcan legalmente en México durante las fechas estipuladas, y para los Participantes que cumplan las leyes vigentes, los requisitos de viaje y los reglamentos de aduana en todo momento. Cada Participante se responsabilizará, por cuenta propia, de obtener, mantener segura y presentar su documentación y autorizaciones de viaje e inmigración necesarias, que incluye lo siguiente: un pasaporte válido y visas solicitadas, permisos de ingreso y documentación adicional que las autoridades o aerolíneas competentes lleguen a solicitar. El Organizador tiene la facultad de negar o revocar la participación presencial, cancelar los viáticos y ejercer mecanismos de sustitución si un Participante no puede viajar o ingresar legalmente a México, no cumple de manera oportuna los requisitos de viaje o inmigración, o si una aerolínea o autoridad le niega abordar o ingresar al país. Tanto el Organizador como Activision se deslindan de toda responsabilidad en la medida máxima en que lo permita la ley aplicable.

13. Comportamiento para las etapas presenciales: Los Participantes deben demostrar un comportamiento tanto legítimo como profesional y no se les permite incurrir en conductas ilegales, actos violentos, expresiones de odio, actos discriminatorios, acoso o comportamientos sexualmente inapropiados, ni cualquier otro comportamiento público que dañe de forma material la integridad o la reputación del Torneo, el Organizador o el Juego. Las etapas presenciales están sujetas a las reglas, controles y protocolos de seguridad y requisitos de producción de la sede; el Organizador puede imponer controles in situ razonables, que incluyen áreas restringidas, verificaciones de credenciales y restricciones de dispositivos.

14. Cumplimiento de las leyes: Los Participantes deben demostrar un comportamiento tanto legítimo como profesional en los viajes relacionados con el Torneo, el acceso a la sede y las actividades presenciales, y no se les permite incurrir en conductas ilegales, actos violentos, expresiones de odio, actos discriminatorios, acoso o comportamientos sexualmente inapropiados, disruptivos o amenazantes, ni cualquier otro comportamiento público que dañe de forma material la integridad o la reputación del Torneo, el Organizador o el Juego. Participantes que deben cumplir las reglas, los controles y protocolos de seguridad y los requisitos de producción de la sede, así como cualquier instrucción razonable de parte de la Administración. El Organizador tiene la facultad de implementar controles in situ razonables, que incluyen áreas restringidas, verificaciones de credenciales, restricciones de dispositivos y expulsión del recinto por incumplimiento de las normas. Se permite el consumo de alcohol donde lo permita la ley, exclusivamente en las áreas designadas, únicamente por parte de las personas con la edad legal para consumir alcohol, y de una manera que no cause un riesgo de seguridad, integridad, de reputación u operación. Los Participantes deben abstenerse de ofrecer alcohol a menores de edad y bajo ninguna circunstancia deben intentar acceder sin autorización a áreas restringidas donde se consume alcohol. No se les permite a los Participantes participar, de manera directa o indirecta, en distintos juegos de azar y apuestas en relación con el Torneo o sus resultados; tampoco se les permite poseer, consumir, distribuir o estar bajo los efectos de sustancias ilegales durante los viajes relacionados con el Torneo, lo ensayos, el acceso a la sede o las actividades en el evento. El incumplimiento de esta cláusula constituye una infracción significativa y resultará en la expulsión inmediata, descalificación, rescisión de la participación, retiro de las Recompensas del o los beneficios del Torneo y la cancelación de un futuro apoyo o preparativos. Tanto el Organizador como Activision se deslindan de toda responsabilidad en la medida máxima en que lo permita la ley aplicable.

15. Protección de datos y privacidad (México): El Organizador hará entrega de un aviso de privacidad durante o antes de la recopilación de datos mediante el flujo de registro del Torneo, el cual describe las categorías de datos personales recopilados, los fines para procesar la información, las categorías de transferencias y los medios para ejercer sus derechos. Se procesarán los datos personales para el registro, administración de elegibilidad, operaciones del Torneo, monitoreo de integridad, comunicaciones, administración de recompensas y producción del evento. Esta información se transferirá a los prestadores de servicios que participan en la administración, producción, coordinación de logística y entregas de Recompensas del Torneo, como se detalla en el aviso de privacidad. Las solicitudes para ejercer los derechos de acceso, rectificación, cancelación u oposición deben enviarse por escrito a la siguiente dirección: Tihuatlán 41-602, Col. San Jerónimo Aculco, Alcaldía Magdalena Contreras, C.P. 10400, in Ciudad de México, México, a la atención de: Derechos de Privacidad (ARCO). Si llega a presentarse una violación de seguridad que afecte de manera significativa los derechos patrimoniales o morales de las personas que proporcionaron sus datos, el Organizador notificará a las personas afectadas de acuerdo con las leyes aplicables.

16. Sistema contra la corrupción y cumplimiento de sanciones: Los Participantes no tienen permitido ofrecer, prometer, autorizar, entregar ni aceptar nada de valor de modo que influya de manera indebida en los resultados, el arbitraje, la selección o cualquier otra decisión administrativa del Torneo. El Organizador tiene la facultad de investigar los motivos de integridad y descalificar a los Participantes de los que se sospeche que hayan cometido infracciones de corrupción o integridad. Se prohíbe la participación en la que se infrinjan sanciones, restricciones comerciales o requisitos legales similares vigentes.

17. Cambios, suspensión y eventos de fuerza mayor: El Organizador tiene la facultad de modificar el calendario, los formatos, las ubicaciones, los planes de transmisión y los procedimientos operativos, de ser razonablemente necesario, para salvaguardar la integridad, la seguridad, el cumplimiento legal, el cumplimiento de la plataforma, las restricciones de producción o los eventos de fuerza mayor. El Organizador no se hace responsable por retrasos, interrupciones o fallas que hayan provocado los eventos que estén fuera de su control razonable, que incluyen interrupciones de la plataforma, interrupciones en la red, actualizaciones del juego, incidentes de seguridad, sede inaccesible, acciones de la autoridad pública o interrupciones en los viajes; tiene además, según su propio criterio, la facultad de reprogramar, reproducir, modificar el formato, sustituir Recompensas con un valor equivalente o cancelar los eventos afectados, todos sujetos a las leyes aplicables.

18. Responsabilidad de operación y exención de indemnización para los Participantes: El Organizador administra el Torneo y tiene la facultad de contratar, coordinar y delegar a prestadores de servicios, sedes, socios de producción y operadores de plataforma para cumplir con diversos aspectos del Torneo, que incluye el registro, la transmisión, la producción del evento, la seguridad y la logística, según corresponda. La participación de terceros no crea una relación contractual directa entre los terceros y ninguno de los Participantes, además de que no extiende las obligaciones del Organizador más allá de las establecidas de manera expresa en los presentes Términos. Nada indicado en los presentes Términos crea una obligación en la que el Organizador indemnice, defienda, reembolse o exima de toda responsabilidad a los Participantes, asistentes, invitados o terceros; ningún Participante o asistente se considerará tercero beneficiario de ningún acuerdo entre el Organizador y sus proveedores de servicios, sedes o socios de producción.

19. Indemnización por parte de los Participantes (limitada y proporcional): En la medida que lo permita la ley aplicable, cada Participante indemnizará y eximirá de toda responsabilidad al Organizador, sus afiliados y sus respectivos directores, responsables, empleados y agentes de y contra demandas de terceros que surjan debido al incumplimiento de los presentes Términos, conducta ilícita o infracciones a la integridad por parte del Participante, siempre que esta indemnización solo aplique según la magnitud de la culpa del Participante y no aplica para las demandas que hayan surgido debido a que el Organizador haya cometido una conducta dolosa.

20. Limitación de responsabilidad: En la medida que lo permitan las leyes aplicables, la responsabilidad total del Organizador hacia un Participante por demandas que surjan debido al Torneo se limita al valor de la Recompensa que reciba el Participante en concreto. Esta limitación no aplica para la responsabilidad que no pueda limitarse bajo las leyes aplicables o a la responsabilidad del Organizador por haber cometido una conducta dolosa.

21. Resolución de disputas y legislación aplicable: Las leyes de México rigen los presentes Términos. Cualquier disputa que surja debido a una circunstancia o que se relacione con los presentes Términos o la participación en el Torneo, se presentará ante los tribunales competentes de la Ciudad de México, México, excepto en instancias en las que leyes obligatorias de protección de datos o del consumidor indiquen lo contrario.

22. Cesión y delegación: El Organizador tiene la facultad de ceder o transferir sus derechos y obligaciones bajo los presentes Términos y delegar el cumplimiento a los prestadores de servicios. Los Participantes no tienen la facultad de ceder ninguno de sus derechos u obligaciones indicados bajo los presentes Términos.

23. Sin renuncia; sin carácter de precedente: Ningún incumplimiento o demora por parte del Organizador para cumplir cualquier disposición se considera una renuncia. Cualquier renuncia debe hacerse por escrito y solo se aplica al caso específico que se ha identificado de manera expresa. Las decisiones y resultados de cumplimiento no constituyen un carácter de precedente y no obligan al Organizador a cumplir asuntos futuros.

24. Separabilidad: Si cualquiera de las disposiciones es considerada como no válida o inaplicable, las demás disposiciones seguirán siendo vigentes en la medida máxima permitida por las leyes aplicables.

25. Términos completos y actualizaciones: Los presentes Términos constituyen un acuerdo íntegro entre cada Participante y el Organizador con respecto a la participación en el Torneo y sustituyen las declaraciones, interpretaciones o comunicaciones previas y contemporáneas sobre dicho asunto, se hayan realizado de forma oral o escrita, excepto por los términos de la plataforma, los términos de la distribuidora y las reglas de la sede vigentes, los cuales siguen aplicándose y se indican mediante referencia en la medida en que sean relevantes para la participación en el Torneo. El Organizador tiene la facultad de revisar, actualizar o complementar los presentes Términos en cualquier momento, de ser razonablemente necesario, para el cumplimiento legal y salvaguardar la integridad, la seguridad, las medidas contra fraudes, el cumplimiento de los requisitos de la plataforma y de la distribuidora, las necesidades de producción, la administración de los premios o los motivos operativos. Cualquier versión actualizada se publicará a través de los canales oficiales del Torneo y entrará en vigor en la fecha y hora indicadas en los Términos actualizados. El acceso continuo, el registro, la participación, la asistencia a las etapas presenciales o la aceptación o uso de Recompensas o beneficios del Torneo después de la fecha de entrada en vigor constituye la aceptación de los Términos actualizados. El Organizador tiene la facultad de solicitar de nuevo la aceptación de los Términos actualizados como condición para seguir participando, además de que suspenderá o descalificará a los Participantes que no acepten los Términos actualizados. Las actualizaciones se aplicarán de manera prospectiva, excepto en la magnitud necesaria para abordar los asuntos de cumplimiento, integridad, seguridad o los requisitos de la plataforma o de la distribuidora para las etapas del Torneo que no se han llevado a cabo todavía, y nada de lo indicado en esta sección limita los derechos no renunciables que tenga un Participante bajo las leyes aplicables.`;

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

export default TermsPage;
