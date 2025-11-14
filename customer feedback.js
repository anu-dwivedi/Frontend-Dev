let feedback = "Great product! Fast delivery and amazing sound quality!";

const words = feedback.split(" ");
const wordCount = words.length;

if (feedback.includes("bad") || feedback.includes("poor")) {
  console.log("Needs Improvement");
} else {
  console.log("Positive Feedback");
}
