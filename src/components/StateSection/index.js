import useScrollFadeIn from '../../functions/useScrollFadeIn';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const waterStates = [
  {
    id: 1,
    buttonText: 'Liquide',
    content:
      "L'eau est liquide à des températures supérieures à 0°C (32°F) et inférieures à 100°C (212°F) à la pression atmosphérique normale. Dans cet état, les molécules d'eau ont suffisamment d'énergie pour se déplacer librement tout en maintenant des liaisons hydrogène. C'est dans cet état que la plupart des réactions chimiques et biologiques ont lieu.",
  },
  {
    id: 2,
    buttonText: 'Solide',
    content:
      "L'eau gèle et devient solide à une température de 0°C (32°F) à une pression atmosphérique normale. Dans cet état, les molécules d'eau forment une structure cristalline régulière. Les liaisons hydrogène entre les molécules d'eau dans la glace créent un arrangement stable.",
  },
  {
    id: 3,
    buttonText: 'Gazeux',
    content:
      "L'eau se vaporise et devient gazeuse à une température supérieure à 100°C (212°F) à la pression atmosphérique normale. Cependant, l'eau peut également s'évaporer à des températures inférieures, mais à un rythme plus lent. Dans cet état, les molécules d'eau ont suffisamment d'énergie pour se séparer et se disperser dans l'air.",
  },
];

export default function StateSection() {
  const isVisible = useScrollFadeIn();
  const [openModal, setOpenModal] = React.useState(null);

  const handleOpenModal = (id) => setOpenModal(id);
  const handleCloseModal = () => setOpenModal(null);

  return (
    <section className={`state-section fadeIn ${isVisible ? 'active' : ''}`}>
      <h1>L'eau existe sous 3 états</h1>
      <div id="water-state-container">
        {waterStates.map((state) => (
          <div key={state.id}>
            <Button onClick={() => handleOpenModal(state.id)}>
              <h1>{state.buttonText}</h1>
            </Button>
            <Modal
              open={openModal === state.id}
              onClose={handleCloseModal}
              aria-labelledby={`modal-modal-title-${state.id}`}
              aria-describedby={`modal-modal-description-${state.id}`}
            >
              <Box sx={style}>
                <Typography
                  id={`modal-modal-title-${state.id}`}
                  variant="h6"
                  component="h2"
                >
                  {state.buttonText}
                </Typography>
                <Typography
                  id={`modal-modal-description-${state.id}`}
                  sx={{ mt: 2 }}
                >
                  {state.content}
                </Typography>
              </Box>
            </Modal>
          </div>
        ))}
      </div>
    </section>
  );
}
