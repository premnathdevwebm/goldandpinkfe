import styles from './OurService.module.css';
const GridComponent = () => {
    const services = [
      { id: 1, title: 'Service 1', description: 'Description for Service 1' },
      { id: 2, title: 'Service 2', description: 'Description for Service 2' },
      { id: 3, title: 'Service 3', description: 'Description for Service 3' },
      { id: 4, title: 'Service 4', description: 'Description for Service 4' },
      { id: 5, title: 'Service 5', description: 'Description for Service 5' },
      { id: 6, title: 'Service 6', description: 'Description for Service 6' },
      { id: 7, title: 'Service 7', description: 'Description for Service 7' },
      { id: 8, title: 'Service 8', description: 'Description for Service 8' },
      { id: 9, title: 'Service 9', description: 'Description for Service 9' },
    ];
  
    return (
      <div>
        <h2 className={styles.heading}>Our Services</h2>
        <div className={styles.gridcontainer}>
          {services.map((service) => (
            <div key={service.id} className={styles.griditem}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default GridComponent;