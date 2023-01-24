// Components
import {
  Text, Flex, Box, Image, Stack, HStack
} from '@chakra-ui/react';
import InformationInList from './components/InformationInList';
import { motion, isValidMotionProp } from 'framer-motion'

const title = `CLASES GISCONTORSIÓN`
const subtitle = `PLANIFICACIÓN DE LA CLASE FORMATO PRESENCIAL U ONLINE`
const classGoalsTitle=`RESUMEN Y OBJETIVO`
const classGoals = `El objetivo de la clase es profundizar cada postura y enlazarlas entre sí. Trabajamos la fuerza en el mayor rango, la resistencia; mejor dicho el habitar de ese lugar. como también llevar esas posturas al aire o disciplina que se practique.
`
const educationStandarsTitle = `ESTÁNDARES DE EDUCACIÓN`
const educationStandars = [`Prevención de lesiones`, `obtención de herramientas de aprendizaje`, `Aprendizaje seguro con base sólida.`]
const goalsTitle = `OBJETIVOS`
const goals = [`Movilidad articular`, `Fuerza en máxima amplitud`, `Habitar en calma`, `Prevención de lesiones`]
const materialsTitle = `MATERIALES NECESARIOS`
const materials = [`Pared libre`, `Silla o banqueta (silla convencional)`, `Mat de yoga , o esterilla`, `Almohada o rodillera`, `Bloques o tacos de Yoga (pueden ser reemplazados por libros)`]
const monitoringOfTheStudentsTitle = `SEGUIMIENTO DEL ALUMNADO`
const monitoringOfTheStudents = `La propuesta es que sea un trabajo en conjunto, ¿ésto qué significa? \n
Yo pongo mi parte: Planificación, consejos y dedicación, Tu pones de tu parte: Ganas, paciencia y tiempo.
 Ser fuertes y sobre todo flexibles lleva tiempo, es un trabajo de mucha constancia y disciplina.  En el proceso hay varios momentos de frustración,  ese es el momento, que no debe faltar la comunicación entre nosotras/os;  para que yo como entrenadora,  aborde ese momento de la mejor manera, resolviendo cuestiones de planificación o de conversación. No dudes en expresar todo lo que sientas respecto a nuestros encuentros.
`
const modalityOfClassesTitle = `MODALIDAD DE LAS CLASES:`
const modalityOfClasses = `Presencial o de forma online.
Como todas mis clases son individuales, siempre se tiene en cuenta el objetivo, tiempo, y practicas extras de cada alumnos/as, al momento de planificar.
Al comienzo de las clases buscamos una preparación , calentamiento físico acorde al objetivo de esa sesión,  luego pasamos a la parte de alargamiento muscular,  trabajo articular y armado de posturas aproximativas al objetivo, para luego en su finalidad trabajar el objetivo en sí. o variante,
LA DURACIÓN DE LA CLASE ES: de 1h minimo. pero tenemos packs con cierta cantidad de horas que podemos dividirlas como sea de conveniencia,  se pueden dividir desde los 15 minutos hasta extender a clases de 2hs.
PARA LAS CLASES ONLINE: utilizamos la plataforma Zoom , grabo material para pasar al alumnado, como para redes.
Tu puedes grabar lo que quieras del encuentro. siempre agradezco que me etiqueten si es material de nuestras clases.
                                  -¿QUÉ PASA SI LLEGO TARDE A LAS CLASES?
Tienes un tiempo límite de espera de 15 minutos.  Si llegas tarde no podremos seguir la planificación, pero podremos hacer ejercicios específicos.
`

const cancelationOfClassesTitle = `CANCELACIÓN DE CLASES:`
const cancelationOfClasses = `Los cambios y/o cancelaciones son 24hs literales:
Ejemplo si tu entreno es a las 10 am deberías avisar , a las 10am del día anterior , si me avisas el día anterior a las 17hs esa clase está perdida. Si agregamos un entrenamiento se cuenta como una clase más.
Al comenzar a entrenar conmigo se da por aceptado esto último. 
¡Otra cosa! Las/os  alumnos/as que tomen clases presenciales y en algún momento quisieran cambiarla al zoom el mismo día , no se cuenta como una clase más, si es que estamos a tiempo de tomarla claro, no importa el motivo, pueden hacerla online a la misma hora, y no pierden su entrenamiento!

                    NO HAGO EXCEPCIONES POR NINGÚN MOTIVO.
`
const tariffsTitle = `ARANCELES`
const tariffs = `CLASE PRESENCIAL
"ASISTIDA" DE FLEXIBILIDAD-CONTORSIÓN
HORA SUELTA 35€
PRESENCIAL PACKS:
I20€ (4 HORAS)
I80€ (6 HORAS)
230€ (8 HORAS)
(LOS PACKS TIENEN
VENCIMIENTO DE 30 DÍAS)

CLASE ONLINE INDIVIDUAL
PERSONALIZADA FLEXIBILIDAD-CONTORSIÓN:
HORA ONLINE SUELTA 25€
ONLINE PACKS:
8 HORAS. VALOR: I50€
6 HORAS. VALOR: I20€
4 HORAS. VALOR: 80€
(LOS PACKS TIENEN
VENCIMIENTO DE 30 DÍAS).
`
const studentEvaluationFormTitle = `FORMULARIO DE EVALUACION DE ALUMNO:`
const studentEvaluationForm = `https://docs.google.com/forms/d/e/1FAIpQLSehzS8ZHo8iusnnou1-DbKcNLjPh8qhRgcc2E2n3w7UKhtbWA/viewform?usp=sf_link`


function ClassesDescription(): JSX.Element {
  return (
    <Stack
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      backgroundColor="darkColor" 
      alignItems="center" 
      width="100%" 
      marginTop={[`10vh`, `0vh`]}
    >
      <Stack 
        style={{
          backgroundImage: `linear-gradient(
              to bottom,
              #1D1D1D,
              rgba(140, 135, 126, 0.5)
            ), url("/assets/classes/principal.jpg")`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
        }} 
        width="100%" 
        height="100vh"
        alignItems="center"
        justifyContent={{ base: `flex-start`, md: `center`, lg: `center`}}
      >
        <Text 
          color="white" 
          fontSize={{ base: "7vw", lg: "3vw" }}
          fontWeight="extrabold"
          width={[`300px`, `100%`]}
          textAlign={[`left`, `center`]}
        >
          {title}
        </Text>
        <Text 
          color="white"
          fontSize={{ base: '0.8rem', md: '1rem', lg: '1.5rem' }} 
          mb="3" 
          fontWeight="bold"
          textAlign={[`left`, `center`]}
          width={[`300px`, `100%`]}
        >
          {subtitle}
        </Text>
      </Stack>
      <Stack bg="brown.0" width="100%" alignItems="center" justifyContent="center" paddingY="10">
        <Stack 
          flexDirection={[`column`, `row`]} 
          alignItems="center" 
          justifyContent="space-evenly" 
          width={[`100%`, `70%`, `50%`]}
          marginBottom="5vh"
          marginTop="2vh"
        >
          <Text    
            color="darkColor"
            fontSize={{ base: '1rem', md: '1rem', lg: '1.5rem' }} 
            fontWeight="extrabold"
            width={[`300px`, `50%`]}
          >
            {classGoalsTitle}
          </Text>
          <Text color="darkColor" width={[`300px`, `35%`]}>{classGoals}</Text>
        </Stack>
        <Stack 
          flexWrap="wrap"
          alignItems="center" 
          justifyContent="space-around" 
          flexDirection={["column", "column", "row", "row"]} 
          width={[`100%`, `70%`, `70%`,`70%`]}
        >
          <InformationInList title={educationStandarsTitle} elements={educationStandars} id={1} /> 
          <InformationInList title={goalsTitle} elements={goals} id={2} /> 
          <InformationInList title={materialsTitle} elements={materials} id={3} /> 
        </Stack>
      </Stack>
      <Text color="white">{monitoringOfTheStudentsTitle}</Text>
      <Text color="white">{monitoringOfTheStudents}</Text>
      <Text color="white">{modalityOfClassesTitle}</Text>
      <Text color="white">{modalityOfClasses}</Text>
      <Text color="white">{cancelationOfClassesTitle}</Text>
      <Text color="white">{cancelationOfClasses}</Text>
      <Text color="white">{tariffsTitle}</Text>
      <Text color="white">{tariffs}</Text>
      <Text color="white">{studentEvaluationFormTitle}</Text>
      <Text color="white">{studentEvaluationForm}</Text>
    </Stack>
  )
}

export default ClassesDescription