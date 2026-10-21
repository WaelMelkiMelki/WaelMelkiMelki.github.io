export interface Project { id: string; title: string; category: string; description: string; stack: string[]; problem: string; approach: string; note?: string; repo: string; visual: 'network' | 'rf' | 'bike' | 'pipeline' }
export const profile = {
  name: 'Wael Melki', role: 'AI/ML Engineer | Data Engineering | Telecommunications',
  introduction: 'I am an ICT Engineer from SUP’COM Tunisia, passionate about designing intelligent systems and transforming data into real-world engineering solutions. My work combines machine learning, data engineering, and telecommunications.',
  github: 'https://github.com/WaelMelkiMelki', email: 'wael.melki@supcom.tn', linkedin: '', resume: '',
  university: 'SUP’COM — École Supérieure des Communications de Tunis', degree: 'ICT Engineering',
  interests: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Data Engineering', '5G & Wireless Communications', 'Signal Processing', 'Embedded Systems'],
}
const github = profile.github
export const projects: Project[] = [
 { id: 'fwa', title: '5G FWA Migration Intelligence', category: 'MACHINE LEARNING × TELECOM', description: 'Connecting customer intelligence with network feasibility to support fixed broadband migration.', stack: ['Python', 'PostgreSQL', 'DuckDB', 'scikit-learn'], problem: 'Which subscribers are suitable for fixed wireless access, and how can network constraints inform migration decisions?', approach: 'The public reconstruction builds a subscriber-month analytical base table from seeded synthetic data, validates data quality, scores eligibility, and adds segmentation and churn baselines.', note: 'Public reconstruction in progress. It is separate from historical Huawei internship results and does not distribute original customer datasets.', repo: github + '/5g-fwa-intelligent-decision-platform', visual: 'network' },
 { id: 'rf', title: '3D RF Propagation Simulator', category: 'WIRELESS × SOFTWARE ENGINEERING', description: 'Making radio propagation visible inside interactive three-dimensional environments.', stack: ['Python', 'PyQt6', 'PyVista / VTK', 'NumPy'], problem: 'Understand how antenna placement, geometry and building materials affect wireless coverage.', approach: 'A four-layer desktop architecture separates visualization, orchestration, RF models and infrastructure. Octree spatial indexing and parallel processing support scene queries and RF calculations.', repo: github + '/RF_simulator', visual: 'rf' },
 { id: 'paris', title: 'Paris Bike Traffic Analysis', category: 'DATA SCIENCE × URBAN MOBILITY', description: 'From raw bicycle counts to a clearer picture of how a city moves.', stack: ['pandas', 'scikit-learn', 'Folium', 'Jupyter'], problem: 'Distinguish commuting and leisure patterns in Paris bicycle traffic and model traffic volume.', approach: 'Clean public counter data, engineer temporal and geographic features, cluster counter profiles with K-Means, and train a Random Forest model. Folium maps make spatial patterns explorable.', repo: github + '/paris-bike-traffic-analysis', visual: 'bike' },
 { id: 'mlops', title: 'OpenMLOps Challenge', category: 'MLOPS × COMPUTER VISION', description: 'Taking image classification beyond a notebook with reproducible training and monitoring.', stack: ['PyTorch', 'ZenML', 'MLflow', 'DVC', 'Docker'], problem: 'Make CIFAR-10 model training traceable and repeatable, with a workflow for monitoring changes in data.', approach: 'A containerized ZenML pipeline connects validation, preprocessing, training, evaluation, conditional model registration and ONNX export. The repository also includes embedding-based drift monitoring and guarded retraining.', repo: github + '/The-OpenMLOps-Challenge-Sup-erSonic', visual: 'pipeline' },
]
export const extraProject = { title: 'Hand Gesture Control', description: 'Webcam-based hand tracking with OpenCV and MediaPipe, translating dual-hand gestures into desktop controls.', repo: github + '/Hand-tracking-Mouse' }
export const experiences = [
 { company: 'Huawei Tunisia', project: 'AI-Driven 5G FWA Planning and Fixed Broadband Migration Strategy', description: 'Applied machine learning and data analysis to fixed broadband migration planning. Connected customer segmentation, churn prediction and migration propensity modeling with 5G network KPIs to inform decision-making.', stack: ['Python', 'PostgreSQL', 'Customer segmentation', '5G network KPIs'] },
 { company: 'NetData Innovation', project: '3D RF Propagation Simulator', description: 'Developed a Python desktop simulation environment combining RF propagation models with interactive 3D visualization. Worked across PyQt6 interfaces, PyVista/VTK rendering, Octree spatial indexing, multiprocessing and performance optimization.', stack: ['PyQt6', 'PyVista / VTK', 'RF modeling', 'Multiprocessing'] },
]
export const skills = [
 { title: 'Programming', items: ['Python', 'SQL', 'Java', 'C++'] },
 { title: 'Machine Learning', items: ['scikit-learn', 'Supervised learning', 'Clustering', 'Predictive modeling'] },
 { title: 'Data Engineering', items: ['PostgreSQL', 'DuckDB', 'ETL', 'Data preprocessing'] },
 { title: 'Telecommunications', items: ['5G', 'RF modeling', 'Wireless networking', 'Network KPIs'] },
 { title: 'Engineering Tools', items: ['Git', 'GitHub', 'Linux', 'Docker', 'MATLAB', 'Simulink'] },
]
export const training = [{ name: 'MATLAB Onramp', provider: 'MathWorks' }, { name: 'Simulink Onramp', provider: 'MathWorks' }, { name: 'Stateflow Onramp', provider: 'MathWorks' }, { name: 'Supervised Learning with scikit-learn', provider: 'DataCamp' }]
