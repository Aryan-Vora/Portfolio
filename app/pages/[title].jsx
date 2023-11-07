// pages/tiles/[title].jsx
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./title.module.css"; // Assuming CSS module is in the same directory

const TilePage = ({ imageSrc, description }) => {
  // Example of fetching data based on the title passed in the URL
  // You would replace this with actual data fetching logic
  const router = useRouter();
  const { title } = router.query;

  // Placeholder data fetching
  // imageSrc and description would be fetched from a data source based on `title`
  // For the sake of example, they're hardcoded here
  imageSrc = imageSrc || "/path-to-default-image.jpg";
  description = description || "Default description for the tile";

  return (
    <div className={styles.tileContainer}>
      <Image
        src={imageSrc}
        alt={`Image for ${title}`}
        width={500} // Set the width as needed
        height={300} // Set the height as needed
        className={styles.tileImage}
      />
      <p className={styles.tileDescription}>{description}</p>
      <Link href="https://github.com/your-github">
        <a target="_blank" rel="noopener noreferrer">
          <Image
            src="/public/github-icon-svg.svg"
            alt="GitHub Icon"
            width={30}
            height={30}
          />
        </a>
      </Link>
    </div>
  );
};

// This function would fetch necessary data for pre-rendering the page
// Replace with actual data fetching logic
export async function getServerSideProps(context) {
  const { title } = context.params;

  // Fetch data based on title here
  // For now, just placeholders
  const imageSrc = "/path-to-image-based-on-title.jpg";
  const description = "Description based on title";

  return {
    props: {
      imageSrc,
      description,
    },
  };
}

export default TilePage;
