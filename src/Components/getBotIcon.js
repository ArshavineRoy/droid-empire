function getBotIcon(bot_class) {
  switch (bot_class) {
    case 'Support':
      return <i className="fa-solid fa-jet-fighter fa-beat-fade" style={{ color: '#d30993' }}></i>;
    case 'Medic':
      return <i className="fa-solid fa-briefcase-medical fa-beat-fade" style={{ color: '#d30993' }}></i>;
    case 'Assault':
      return <i className="fa-solid fa-gun fa-beat-fade" style={{ color: '#d30993' }}></i>;
    case 'Defender':
      return <i className="fa-solid fa-shield-halved fa-beat-fade" style={{ color: '#d30993' }}></i>;
    case 'Captain':
      return <i className="fa-solid fa-copyright fa-beat-fade" style={{ color: '#d30993' }}></i>;
    case 'Witch':
      return <i className="fa-solid fa-hat-wizard fa-beat-fade" style={{ color: '#d30993' }}></i>;
    default:
      return null;
  }
}

export default getBotIcon;
