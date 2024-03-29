import styles from "./ManiPedi.module.css";
import image1 from "./comp1.webp"
import image2 from "./comp2.webp"

const comps = [
  {
    id: 1,
    name: "Manicure",
    content:
      "A manicure provides a deep clean for your nails, as well as ensuring that they look great. This is an important part of positive nail health, as both our hands and feet go through a lot on a daily basis",
  },
  {
    id: 2,
    name: "Pedicure",
    content:
      "Pedicures include care not only for the toenails; dead skin cells are rubbed off the bottom of the feet using a rough stone (often a pumice stone). Skincare is often provided up to the knee, including granular exfoliation, moisturizing, and massage",
  }
];

const LashComponent = () => {
  return (
    <div className={styles.parcontain}>
      {comps.map((ele) => (
        <div key={ele.id} className={styles.container}>
          <div className={styles.row}>
            <div className={styles.imag}>
              <img src={`${ele.id === 1 ? image1 : image2}`} alt="" />
            </div>
            <div>
                <h2>{ele.name}</h2>
                <p>{ele.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LashComponent;
