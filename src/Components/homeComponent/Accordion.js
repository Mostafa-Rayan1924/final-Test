import MainTitle from "../InAll/MainTitle";
import AccordionBox from "./AccordionBox";

const Accordion = () => {
  return (
    <div className="py-[100px]">
      <MainTitle title={"الاسئلة المتكررة"} />
      <div className="container grid grid-cols-1  gap-5">
        <div>
          <AccordionBox
            head={"ما هي خبرة الشركة في مجال المقاولات؟"}
            body={
              "شركتنا  لديها خبرة واسعة في صناعة البناء والإنشاءات. لقد قمنا بتنفيذ مجموعة متنوعة من المشاريع الكبيرة والصغيرة، بما في ذلك المباني السكنية والتجارية والمشاريع البحرية والبنية التحتية. نحن نفخر بإتقاننا في تنفيذ المشاريع وتحقيق رضا العملاء."
            }
          />
        </div>
        <div>
          <AccordionBox
            head={
              "هل لديكم التراخيص والشهادات اللازمة للعمل في مجال المقاولات؟"
            }
            body={
              "نعم , شركتنا تمتلك جميع التراخيص والشهادات اللازمة لممارسة أعمال المقاولات. نحن نلتزم بالقوانين واللوائح المحلية والدولية ذات الصلة ونحرص على الامتثال لها في جميع مشاريعنا"
            }
          />
        </div>
        <div>
          <AccordionBox
            head={"ما هو نطاق الخدمات التي تقدمونها؟"}
            body={
              "حن نقدم مجموعة شاملة من خدمات الإنشاءات، بما في ذلك بناء المباني السكنية والتجارية، والبنية التحتية والطرق، والهياكل الخرسانية والصلبة، وأعمال التشطيبات والتجهيزات، وإدارة المشاريع. نحن نغطي مختلف الجوانب اللازمة لإنجاز المشروعات بنجاح."
            }
          />
        </div>
        <div>
          <AccordionBox
            head={"ما هي مدة التنفيذ المتوقعة للمشاريع؟"}
            body={
              "مدة التنفيذ تعتمد على حجم وتعقيد المشروع. نحن نقوم بتحليل المشروع بدقة ونقدم جدول زمني واقعي للعملاء يشمل مراحل البناء المختلفة. نحرص على احترام المواعيد المحددة وتنفيذ المشاريع في الوقت المناسب."
            }
          />
        </div>
        <div>
          <AccordionBox
            head={"كيف يتم ضمان جودة العمل المقدم؟"}
            body={
              "نحن نضع الجودة في صميم أولوياتنا. نستخدم مواد عالية الجودة ونتبع معايير البناء والإنشاءات المحددة. لدينا فريق مؤهل من المهندسين والفنيين المختصين يقومون بمراقبة الجودة خلال جميع مراحل المشروع. كما نحرص على متابعة ملاحظات العملاء وتلبية متطلباتهم بدقة."
            }
          />
        </div>
        <div>
          <AccordionBox
            head={"هل لديكم أعمال مرجعية سابقة يمكنني الاطلاع عليها؟"}
            body={
              "نعم، لدينا مجموعة واسعة من المشاريع السابقة التي قمنا بتنفيذها ويمكنك الاطلاع عليها. نحن نفخر بما حققناه ونقدم أمثلة على مشاريع مختلفة في صفحات العملاء أو القسم المخصص على موقعنا على الإنترنت."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
