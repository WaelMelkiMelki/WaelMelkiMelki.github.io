export interface Project { id: string; title: string; category: string; description: string; stack: string[]; problem: string; approach: string; note?: string; repo: string; visual: 'network' | 'rf' | 'bike' | 'pipeline' }
export const profile = {
  name: 'Wael Melki', role: 'AI/ML Engineer | Data Science | Data Engineering',
  introduction: 'I am an ICT Engineer from SUP’COM Tunisia, passionate about designing intelligent systems and transforming data into real-world engineering solutions. My work combines machine learning, data engineering, and software development.',
  github: 'https://github.com/WaelMelkiMelki', email: 'wael.melki@supcom.tn', linkedin: 'https://www.linkedin.com/in/wael-melki-097b56202/', resume: '/resume/Wael_Melki_CV.pdf',
  university: 'SUP’COM — École Supérieure des Communications de Tunis', degree: 'ICT Engineering',
  interests: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Data Engineering', 'Signal Processing', 'Embedded Systems'],
}
const github = profile.github
export const projects: Project[] = [
 { id: 'fwa', title: '5G FWA Migration Intelligence', category: 'MACHINE LEARNING × DECISION SYSTEMS', description: 'Connecting customer intelligence with network feasibility to support fixed broadband migration.', stack: ['Python', 'PostgreSQL', 'DuckDB', 'scikit-learn'], problem: 'Which subscribers are suitable for fixed wireless access, and how can network constraints inform migration decisions?', approach: 'The public reconstruction builds a subscriber-month analytical base table from seeded synthetic data, validates data quality, scores eligibility, and adds segmentation and churn baselines.', note: 'Public reconstruction in progress. It is separate from historical Huawei internship results and does not distribute original customer datasets.', repo: github + '/5g-fwa-intelligent-decision-platform', visual: 'network' },
 { id: 'rf', title: '3D RF Propagation Simulator', category: '3D VISUALIZATION × SOFTWARE ENGINEERING', description: 'Making radio propagation visible inside interactive three-dimensional environments.', stack: ['Python', 'PyQt6', 'PyVista / VTK', 'NumPy'], problem: 'Understand how antenna placement, geometry and building materials affect wireless coverage.', approach: 'A four-layer desktop architecture separates visualization, orchestration, RF models and infrastructure. Octree spatial indexing and parallel processing support scene queries and RF calculations.', repo: github + '/RF_simulator', visual: 'rf' },
 { id: 'paris', title: 'Paris Bike Traffic Analysis', category: 'DATA SCIENCE × URBAN MOBILITY', description: 'From raw bicycle counts to a clearer picture of how a city moves.', stack: ['pandas', 'scikit-learn', 'Folium', 'Jupyter'], problem: 'Distinguish commuting and leisure patterns in Paris bicycle traffic and model traffic volume.', approach: 'Clean public counter data, engineer temporal and geographic features, cluster counter profiles with K-Means, and train a Random Forest model. Folium maps make spatial patterns explorable.', repo: github + '/paris-bike-traffic-analysis', visual: 'bike' },
 { id: 'mlops', title: 'OpenMLOps Challenge', category: 'MLOPS × COMPUTER VISION', description: 'Taking image classification beyond a notebook with reproducible training and monitoring.', stack: ['PyTorch', 'ZenML', 'MLflow', 'DVC', 'Docker'], problem: 'Make CIFAR-10 model training traceable and repeatable, with a workflow for monitoring changes in data.', approach: 'A containerized ZenML pipeline connects validation, preprocessing, training, evaluation, conditional model registration and ONNX export. The repository also includes embedding-based drift monitoring and guarded retraining.', repo: github + '/The-OpenMLOps-Challenge-Sup-erSonic', visual: 'pipeline' },
]
export const extraProject = { title: 'Hand Gesture Control', description: 'Webcam-based hand tracking with OpenCV and MediaPipe, translating dual-hand gestures into desktop controls.', repo: github + '/Hand-tracking-Mouse' }
export const experiences = [
 { company: 'Huawei North Africa', stage: 'Year 3 · Final-year engineering internship', projectId: 'fwa', project: 'AI-Driven 5G FWA Planning and Fixed Broadband Migration Strategy', description: 'Applied machine learning and data analysis to fixed broadband migration planning. Connected customer segmentation, churn prediction and migration propensity modeling with 5G network KPIs to inform decision-making.', stack: ['Python', 'PostgreSQL', 'Customer segmentation', '5G network KPIs'] },
 { company: 'NetData Innovation', stage: 'Year 2 · Software development internship', projectId: 'rf', project: '3D RF Propagation Simulator', description: 'Developed a Python desktop simulation environment combining RF propagation models with interactive 3D visualization. Worked across PyQt6 interfaces, PyVista/VTK rendering, Octree spatial indexing, multiprocessing and performance optimization.', stack: ['PyQt6', 'PyVista / VTK', 'RF modeling', 'Multiprocessing'] },
 { company: 'Tunisie Telecom', stage: 'Year 1 · Human development internship', projectId: '', project: 'Stage de formation humaine', description: 'First-year human development internship, introducing the professional workplace as part of the ICT engineering curriculum at SUP’COM.', stack: ['Professional development'] },
]
export const skills = [
 { title: 'Programming', items: ['Python', 'SQL', 'Java', 'C++'] },
 { title: 'Machine Learning', items: ['scikit-learn', 'Supervised learning', 'Clustering', 'Predictive modeling'] },
 { title: 'Data Engineering', items: ['PostgreSQL', 'DuckDB', 'ETL', 'Data preprocessing'] },
 { title: 'Software & Visualization', items: ['PyQt6', 'PyVista / VTK', 'NumPy', 'Multiprocessing'] },
 { title: 'Engineering Tools', items: ['Git', 'GitHub', 'Linux', 'Docker', 'MATLAB', 'Simulink'] },
]
export const training = [{ name: 'MATLAB Onramp', provider: 'MathWorks' }, { name: 'Machine Learning Onramp', provider: 'MathWorks' }, { name: 'Stateflow Onramp', provider: 'MathWorks' }]
export const academicProjects = [
 { title: 'Multimodal ML for Non-Invasive Diabetes Research', description: 'Co-developed an ECG and respiratory-signal research prototype: filtering, feature extraction, SVM and Random Forest evaluation, subject-aware validation and late fusion. Small-sample research, not a clinical diagnostic system.' },
 { title: 'Real-Time Object Tracking', description: 'Implemented and compared tracking algorithms in Python and OpenCV, evaluating their behavior in dynamic scenes.' },
 { title: 'Statistical Voice Conversion', description: 'Applied spectral-envelope estimation and modification with Python, NumPy and SciPy to transform speech characteristics.' },
]
