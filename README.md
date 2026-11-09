# Open-World Semantic SLAM: A Survey on Representations, Uncertainty, and Lifelong Adaptation

Thanh Nguyen Canh, Haolan Zhang, Xiem HoangVan, Nak Young Chong · preprint, 2026

**Project page:** https://thanhnguyencanh.github.io/open-semanticSLAM-survey/

Semantic SLAM still largely assumes a closed set of categories, a static world and deterministic labels. This survey argues that four developments (differentiable scene representations, vision–language foundation models, uncertainty quantification and lifelong mapping) are interlocking pillars of a single shift toward **open-world semantic SLAM**, and organizes 81 systems around them.

## Contents

- [P1 · Map representations](#p1--map-representations)
- [P2 · Semantics and foundation models](#p2--semantics-and-foundation-models)
- [P3 · Uncertainty](#p3--uncertainty)
- [P4 · Lifelong adaptation](#p4--lifelong-adaptation)
- [Scene understanding (not full SLAM)](#scene-understanding-not-full-slam)
- [Open problems](#open-problems)
- [Citation](#citation)

## P1 · Map representations

### NeRF-style: implicit / hybrid neural fields (24)

| System | Year | Paper |
|---|---|---|
| **iMAP** | 2021 | E. Sucar, S. Liu, J. Ortiz, and A. J. Davison, “imap: Implicit mapping and positioning in real-time,” in Proceedings of the IEEE/CVF international conference on computer vision, 2021, pp. 6229–6238. |
| **NICE-SLAM** | 2022 | Z. Zhu, S. Peng, V. Larsson, W. Xu, H. Bao, Z. Cui, M. R. Oswald, and M. Pollefeys, “Nice-slam: Neural implicit scalable encoding for slam,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2022, pp. 12 786–12 796. |
| **Vox-Fusion** | 2022 | X. Yang, H. Li, H. Zhai, Y. Ming, Y. Liu, and G. Zhang, “Voxfusion: Dense tracking and mapping with voxel-based neural implicit representation,” in 2022 IEEE International Symposium on Mixed and Augmented Reality (ISMAR). IEEE, 2022, pp. 499–507. |
| **Co-SLAM** | 2023 | H. Wang, J. Wang, and L. Agapito, “Co-slam: Joint coordinate and sparse parametric encodings for neural real-time slam,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2023, pp. 13 293–13 302. |
| **DIM-SLAM** | 2023 | H. Li, X. Gu, W. Yuan, L. Yang, Z. Dong, and P. Tan, “Dense RGB SLAM with neural implicit maps,” in Proc. Int. Conf. Learning Representations (ICLR), 2023. |
| **ESLAM** | 2023 | M. M. Johari, C. Carta, and F. Fleuret, “Eslam: Efficient dense slam system based on hybrid representation of signed distance fields,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2023, pp. 17 408–17 419. |
| **GO-SLAM** | 2023 | Y. Zhang, F. Tosi, S. Mattoccia, and M. Poggi, “Go-slam: Global optimization for consistent 3d instant reconstruction,” in Proceedings of the IEEE/CVF international conference on computer vision, 2023, pp. 3727–3737. |
| **Hi-SLAM** | 2023 | W. Zhang, T. Sun, S. Wang, Q. Cheng, and N. Haala, “Hi-SLAM: Monocular real-time dense mapping with hybrid implicit fields,” IEEE Robotics and Automation Letters, 2023. |
| **LONER** | 2023 | S. Isaacson, P.-C. Kung, M. Ramanagopal, R. Vasudevan, and K. A. Skinner, “LONER: LiDAR only neural representations for real-time SLAM,” IEEE Robotics and Automation Letters, 2023. |
| **NeRF-LOAM** | 2023 | J. Deng, Q. Wu, X. Chen, S. Xia, Z. Sun, G. Liu, W. Yu, and L. Pei, “NeRF-LOAM: Neural implicit representation for large-scale incremental LiDAR odometry and mapping,” in Proc. IEEE/CVF Int. Conf. Computer Vision (ICCV), 2023, pp. 8218–8227. |
| **Orbeez-SLAM** | 2023 | C.-M. Chung, Y.-C. Tseng, Y.-C. Hsu, X.-Q. Shi, Y.-H. Hua, J.-F. Yeh, W.-C. Chen, Y.-T. Chen, and W. H. Hsu, “Orbeez-SLAM: A real-time monocular visual SLAM with ORB features and NeRF-realized mapping,” in Proc. IEEE Int. Conf. Robotics and Automation (ICRA), 2023, pp. 9400–9406. |
| **Point-SLAM** | 2023 | E. Sandström, Y. Li, L. Van Gool, and M. R. Oswald, “Pointslam: Dense neural point cloud-based slam,” in Proceedings of the IEEE/CVF international conference on computer vision, 2023, pp. 18 433–18 444. |
| **DDS-SLAM** | 2024 | J. Shan, Y. Li, L. Yang, Q. Feng, L. Han, and H. Wang, “Dds-slam: Dense semantic neural slam for deformable endoscopic scenes,” in 2024 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2024, pp. 10 837–10 842. |
| **GlORIE-SLAM** | 2024 | G. Zhang, E. Sandström, Y. Zhang, M. Patel, L. Van Gool, and M. R. Oswald, “GlORIE-SLAM: Globally optimized RGBonly implicit encoding point cloud SLAM,” arXiv preprint arXiv:2403.19549, 2024. |
| **NEWTON** | 2024 | H. Matsuki, K. Tateno, M. Niemeyer, and F. Tombari, “Newton: Neural view-centric mapping for on-the-fly large-scale slam,” IEEE Robotics and Automation Letters, vol. 9, no. 4, pp. 3704–3711, 2024. |
| **NICER-SLAM** | 2024 | Z. Zhu, S. Peng, V. Larsson, Z. Cui, M. R. Oswald, A. Geiger, and M. Pollefeys, “NICER-SLAM: Neural implicit scene encoding for RGB SLAM,” in Proc. Int. Conf. 3D Vision (3DV), 2024. |
| **PIN-SLAM** | 2024 | Y. Pan, X. Zhong, L. Wiesmann, T. Posewsky, J. Behley, and C. Stachniss, “Pin-slam: Lidar slam using a point-based implicit neural representation for achieving global map consistency,” IEEE Transactions on Robotics, vol. 40, pp. 4045–4064, 2024. |
| **PLGSLAM** | 2024 | T. Deng, G. Shen, T. Qin, J. Wang, W. Zhao, J. Wang, D. Wang, and W. Chen, “Plgslam: Progressive neural scene represenation with local to global bundle adjustment,” in Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2024, pp. 19 657–19 666. |
| **SGBA** | 2024 | X. Ji, S. Yuan, J. Li, P. Yin, H. Cao, and L. Xie, “Sgba: Semantic gaussian mixture model-based lidar bundle adjustment,” IEEE Robotics and Automation Letters, vol. 9, no. 12, pp. 10 922–10 929, 2024. |
| **Uni-Fusion** | 2024 | Y. Yuan and A. Nuechter, “Uni-fusion: Universal continuous mapping,” IEEE Transactions on Robotics, vol. 40, pp. 1373–1392, 2024. |
| **Jung et al.** | 2025 | J. Jung, S. Boche, S. B. Laina, and S. Leutenegger, “Uncertaintyaware visual-inertial slam with volumetric occupancy mapping,” in 2025 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2025, pp. 14 550–14 556. |
| **MoD-SLAM** | 2025 | H. Zhou, Z. Guo, Y. Ren, S. Liu, L. Zhang, K. Zhang, and M. Li, “Mod-slam: Monocular dense mapping for unbounded 3d scene reconstruction,” IEEE Robotics and Automation Letters, vol. 10, no. 1, pp. 484–491, 2025. |
| **UN³-Mapping** | 2025 | S. Song, J. Zhao, E. Veas, J. Lin, Q. Cao, C. Ye, and T. Feng, “Un3-mapping: Uncertainty-aware neural non-projective signed distance fields for 3d mapping,” IEEE Robotics and Automation Letters, 2025. |
| **AING-SLAM** | 2026 | Y. Hao, C. Shi, P. Zhang, F. Tang, and Y. Wu, “Aing-slam: Accurate implicit neural geometry-aware slam with appearance and semantics via history-guided optimization,” IEEE Robotics and Automation Letters, vol. 11, no. 3, pp. 2594–2601, 2026. |

### 3DGS-style: explicit Gaussian primitives (15)

| System | Year | Paper |
|---|---|---|
| **Gaussian-SLAM** | 2023 | V. Yugay, Y. Li, T. Gevers, and M. R. Oswald, “Gaussian-SLAM: Photo-realistic dense SLAM with Gaussian Splatting,” arXiv preprint arXiv:2312.10070, 2023. |
| **CG-SLAM** | 2024 | J. Hu, X. Chen, B. Feng, G. Li, L. Yang, H. Bao, G. Zhang, and Z. Cui, “Cg-slam: Efficient dense rgb-d slam in a consistent uncertainty-aware 3d gaussian field,” in European Conference on Computer Vision. Springer, 2024, pp. 93–112. |
| **GS-ICP SLAM** | 2024 | S. Ha, J. Yeon, and H. Yu, “Rgbd gs-icp slam,” in Proc. European Conf. Computer Vision (ECCV), 2024, pp. 180–197. |
| **GS-SLAM** | 2024 | C. Yan, D. Qu, D. Xu, B. Zhao, Z. Wang, D. Wang, and X. Li, “Gs-slam: Dense visual slam with 3d gaussian splatting,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2024, pp. 19 595–19 604. |
| **GSSLAM** | 2024 | H. Matsuki, R. Murai, P. H. Kelly, and A. J. Davison, “Gaussian splatting slam,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2024, pp. 18 039–18 048. |
| **Photo-SLAM** | 2024 | H. Huang, L. Li, H. Cheng, and S.-K. Yeung, “Photo-slam: Real-time simultaneous localization and photorealistic mapping for monocular stereo and rgb-d cameras,” in Proceedings of the PREPRINT 23 IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2024, pp. 21 584–21 593. |
| **SplaTAM** | 2024 | N. Keetha, J. Karhade, K. M. Jatavallabhula, G. Yang, S. Scherer, D. Ramanan, and J. Luiten, “Splatam: Splat track & map 3d gaussians for dense rgb-d slam,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2024, pp. 21 357–21 366. |
| **CGS-SLAM** | 2025 | T. Deng, Y. Chen, J. Yang, S. Yuan, J. Liu, D. Wang, and W. Chen, “Cgs-slam: Compact 3d gaussian splatting for dense visual slam,” in 2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025, pp. 1606–1613. |
| **Hier-SLAM** | 2025 | B. Li, Z. Cai, Y.-F. Li, I. Reid, and H. Rezatofighi, “Hier-slam: Scaling-up semantics in slam with a hierarchically categorical gaussian splatting,” in 2025 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2025, pp. 9748–9754. |
| **RGBDS-SLAM** | 2025 | Z. Cao, C. Zhao, Q. Zhang, J. Guang, Y. Song, and J. Liu, “Rgbds-slam: A rgb-d semantic dense slam based on 3d multi level pyramid gaussian splatting,” IEEE Robotics and Automation Letters, 2025. |
| **SAP-SLAM** | 2025 | Y. Yang, Y. Lin, W. Yang, G. Wang, and Q. Liao, “Sap-slam: Semantic-assisted perception slam with 3d gaussian splatting,” in 2025 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2025, pp. 8493–8499. |
| **SDD-SLAM** | 2025 | H. Liu, L. Wang, H. Luo, F. Zhao, R. Chen, Y. Chen, M. Xiao, J. Yan, and D. Luo, “Sdd-slam: semantic-driven dynamic slam with gaussian splatting,” IEEE Robotics and Automation Letters, 2025. |
| **VSG-SLAM** | 2025 | W. Tong, K. Dai, and L. Zeng, “Vsg-slam: A dense visual semantic slam with gaussian splatting,” in 2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2025, pp. 9044–9050. |
| **Wilson et al.** | 2025 | J. Wilson, M. Almeida, M. Sun, S. Mahajan, M. Ghaffari, P. Ewen, O. Ghasemalizadeh, C.-H. Kuo, and A. Sen, “Modeling uncertainty in 3d gaussian splatting through continuous semantic splatting,” in 2025 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2025, pp. 3284–3290. |
| **FeatureSLAM** | 2026 | C. Thirgood, O. Mendez, E. Ling, J. Storey, and S. Hadfield, “Featureslam: Feature-enriched 3d gaussian splatting slam in real time,” arXiv preprint arXiv:2601.05738, 2026. |

## P2 · Semantics and foundation models

### Closed-set labels (10)

| System | Year | Paper |
|---|---|---|
| **SemanticFusion** | 2017 | J. McCormac, A. Handa, A. Davison, and S. Leutenegger, “SemanticFusion: Dense 3D semantic mapping with convolutional neural networks,” in Proc. IEEE Int. Conf. Robotics and Automation (ICRA), 2017, pp. 4628–4635. |
| **CubeSLAM** | 2019 | S. Yang and S. Scherer, “CubeSLAM: Monocular 3D object SLAM,” IEEE Transactions on Robotics, vol. 35, no. 4, pp. 925–938, 2019. |
| **NIDS-SLAM** | 2023 | Y. Haghighi, S. Kumar, J.-P. Thiran, and L. Van Gool, “Neural implicit dense semantic SLAM,” arXiv preprint arXiv:2304.14560, 2023. |
| **vMAP** | 2023 | X. Kong, S. Liu, M. Taher, and A. J. Davison, “vMAP: Vectorised object mapping for neural field SLAM,” in Proc. IEEE/CVF Conf. Computer Vision and Pattern Recognition (CVPR), 2023, pp. 952– 961. |
| **DNS-SLAM** | 2024 | K. Li, M. Niemeyer, N. Navab, and F. Tombari, “Dns-slam: Dense neural semantic-informed slam,” in 2024 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2024, pp. 7839–7846. |
| **NEDS-SLAM** | 2024 | Y. Ji, Y. Liu, G. Xie, B. Ma, Z. Xie, and H. Liu, “Neds-slam: A neural explicit dense semantic slam framework using 3d gaussian splatting,” IEEE Robotics and Automation Letters, vol. 9, no. 10, pp. 8778–8785, 2024. |
| **SGS-SLAM** | 2024 | M. Li, S. Liu, H. Zhou, G. Zhu, N. Cheng, T. Deng, and H. Wang, “Sgs-slam: Semantic gaussian splatting for neural dense slam,” in European Conference on Computer Vision. Springer, 2024, pp. 163–179. |
| **SNI-SLAM** | 2024 | S. Zhu, G. Wang, H. Blum, J. Liu, L. Song, M. Pollefeys, and H. Wang, “Sni-slam: Semantic neural implicit slam,” in Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2024, pp. 21 167–21 177. |
| **ActiveSGM** | 2025 | L. Chen, H. Zhan, H. Yin, Y. Xu, and P. Mordohai, “Understanding while exploring: Semantics-driven active mapping,” in The Thirty-ninth Annual Conference on Neural Information Processing Systems, 2025. |
| **SemGauss-SLAM** | 2025 | S. Zhu, R. Qin, G. Wang, J. Liu, and H. Wang, “Semgaussslam: Dense semantic gaussian splatting slam,” in 2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2025, pp. 21 174–21 181. |

### Open-vocabulary (10)

| System | Year | Paper |
|---|---|---|
| **FM-Fusion** | 2024 | C. Liu, K. Wang, J. Shi, Z. Qiao, and S. Shen, “Fm-fusion: Instanceaware semantic mapping boosted by vision-language foundation models,” IEEE Robotics and Automation Letters, vol. 9, no. 3, pp. 2232–2239, 2024. |
| **Open-Fusion** | 2024 | K. Yamazaki, T. Hanyu, K. Vo, T. Pham, M. Tran, G. Doretto, A. Nguyen, and N. Le, “Open-fusion: Real-time open-vocabulary 3d mapping and queryable scene representation,” in 2024 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2024, pp. 9411–9417. |
| **DualMap** | 2025 | J. Jiang, Y. Zhu, Z. Wu, and J. Song, “Dualmap: Online openvocabulary semantic mapping for natural language navigation in dynamic changing scenes,” IEEE Robotics and Automation Letters, 2025. |
| **DynaMem** | 2025 | P. Liu, Z. Guo, M. Warke, S. Chintala, C. Paxton, N. M. M. Shafiullah, and L. Pinto, “Dynamem: Online dynamic spatiosemantic memory for open world mobile manipulation,” in 2025 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2025, pp. 13 346–13 355. |
| **Martins et al.** | 2025 | T. B. Martins, M. R. Oswald, and J. Civera, “Open-vocabulary online semantic mapping for slam,” IEEE Robotics and Automation Letters, 2025. |
| **OVSG-SLAM** | 2025 | Z. Liu, S. Li, G. Huang, and Y. Wu, “Ovsg-slam: Open-vocabulary semantic gaussian splatting slam,” in 2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2025, pp. 12 804–12 811. |
| **OpenGS-SLAM** | 2025 | D. Yang, Y. Gao, X. Wang, Y. Yue, Y. Yang, and M. Fu, “Opengsslam: Open-set dense semantic slam with 3d gaussian splatting for object-level scene understanding,” in 2025 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2025, pp. 8486–8492. |
| **FindAnything** | 2026 | S. B. Laina, S. Boche, S. Papatheodorou, S. Schaefer, J. Jung, H. Oleynikova, and S. Leutenegger, “Findanything: Openvocabulary and object-centric mapping for robot exploration in any environment,” in 2026 IEEE International Conference on Robotics and Automation (ICRA), 2026. |
| **OVI-MAP** | 2026 | Z. Deng, F. Tombari, M. Pollefeys, J. Wald, and D. Barath, “OVIMAP: Open-vocabulary instance-semantic mapping,” in Proc. IEEE/CVF Conf. Computer Vision and Pattern Recognition (CVPR), 2026, pp. 12 606–12 616. |
| **VISTA** | 2026 | K. Nagami, T. Chen, J. Yu, O. Shorinwa, M. Adang, C. Dougherty, E. Cristofalo, and M. Schwager, “Vista: Open-vocabulary, taskrelevant robot exploration with online semantic gaussian splatting,” IEEE Robotics and Automation Letters, 2026. |

## P3 · Uncertainty

### Geometric (2)

| System | Year | Paper |
|---|---|---|
| **NeRF-SLAM** | 2023 | A. Rosinol, J. J. Leonard, and L. Carlone, “Nerf-slam: Real-time dense monocular slam with neural radiance fields,” in 2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2023, pp. 3437–3444. |
| **UncLe-SLAM** | 2023 | E. Sandström, K. Ta, L. Van Gool, and M. R. Oswald, “Uncleslam: Uncertainty learning for dense neural slam,” in Proceedings of the IEEE/CVF International Conference on Computer Vision, 2023, pp. 4537–4548. |

### Semantic (6)

| System | Year | Paper |
|---|---|---|
| **S-BKI** | 2020 | L. Gan, R. Zhang, J. W. Grizzle, R. M. Eustice, and M. Ghaffari, “Bayesian spatial kernel smoothing for scalable dense semantic mapping,” IEEE Robotics and Automation Letters, vol. 5, no. 2, pp. 790–797, 2020. |
| **ConvBKI** | 2024 | J. Wilson, Y. Fu, J. Friesen, P. Ewen, A. Capodieci, P. Jayakumar, K. Barton, and M. Ghaffari, “Convbki: Real-time probabilistic semantic mapping network with quantifiable uncertainty,” IEEE Transactions on Robotics, vol. 40, pp. 4648–4667, 2024. |
| **EvidKimera** | 2025 | R. Menon, N. Dengler, S. Pan, G. K. Chenchani, and M. Bennewitz, “Evidmtl: Evidential multi-task learning for uncertaintyaware semantic surface mapping from monocular rgb images,” in 2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2025, pp. 17 223–17 230. |
| **LatentBKI** | 2025 | J. Wilson, R. Xu, Y. Sun, P. Ewen, M. Zhu, K. Barton, and M. Ghaffari, “Latentbki: Open-dictionary continuous mapping in visual-language latent spaces with quantifiable uncertainty,” IEEE Robotics and Automation Letters, 2025. |
| **E²-BKI** | 2026 | J. Kim, M. Jeon, J. Min, K. Kwak, and J. Seo, “E2-bki: Evidential ellipsoidal bayesian kernel inference for uncertainty-aware gaussian semantic mapping,” IEEE Robotics and Automation Letters, vol. 11, no. 3, pp. 2378–2385, 2026. |
| **SLIM-VDB** | 2026 | A. Sheppard, P. Ewen, J. Wilson, A. V. Sethuraman, B. Adewole, A. Li, Y. Chen, R. Vasudevan, and K. A. Skinner, “Slim-vdb: A real-time 3d probabilistic semantic mapping framework,” IEEE Robotics and Automation Letters, vol. 11, no. 3, pp. 2386–2393, 2026. |

## P4 · Lifelong adaptation

### Submaps & multi-session (5)

| System | Year | Paper |
|---|---|---|
| **CP-SLAM** | 2023 | J. Hu, M. Mao, H. Bao, G. Zhang, and Z. Cui, “Cp-slam: Collaborative neural point-based slam system,” Advances in Neural Information Processing Systems, vol. 36, pp. 39 429–39 442, 2023. |
| **MIPS-Fusion** | 2023 | Y. Tang, J. Zhang, Z. Yu, H. Wang, and K. Xu, “Mips-fusion: Multi-implicit-submaps for scalable and robust online neural rgbd reconstruction,” ACM Transactions on Graphics (TOG), vol. 42, no. 6, pp. 1–16, 2023. |
| **Loopy-SLAM** | 2024 | L. Liso, E. Sandström, V. Yugay, L. Van Gool, and M. R. Oswald, “Loopy-slam: Dense neural slam with loop closures,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2024, pp. 20 363–20 373. |
| **ELite** | 2025 | H. Gil, D. Lee, G. Kim, and A. Kim, “Ephemerality meets lidarbased lifelong mapping,” in 2025 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2025, pp. 3312–3319. |
| **LiLoc** | 2025 | Y. Fang, Y. Li, K. Qian, F. Tombari, Y. Wang, and G. H. Lee, “Liloc: Lifelong localization using adaptive submap joining and egocentric factor graph,” in 2025 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2025, pp. 8041–8047. |

### Dynamic scenes (6)

| System | Year | Paper |
|---|---|---|
| **DN-SLAM** | 2023 | C. Ruan, Q. Zang, K. Zhang, and K. Huang, “Dn-slam: A visual slam with orb features and nerf mapping in dynamic environments,” IEEE Sensors Journal, vol. 24, no. 4, pp. 5279–5287, 2023. |
| **Biswas et al.** | 2024 | S. Biswas, B. Banerjee, and H. Rezatofighi, “Shape-prior free space-time neural radiance field for 4d semantic reconstruction of dynamic scene from sparse-view rgb videos,” in 2024 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2024, pp. 14 233–14 240. |
| **DDN-SLAM** | 2025 | M. Li, Z. Guo, T. Deng, Y. Zhou, Y. Ren, and H. Wang, “DDNSLAM: Real time dense dynamic neural implicit SLAM,” IEEE Robotics and Automation Letters, vol. 10, no. 5, pp. 4300–4307, 2025. |
| **DVN-SLAM** | 2025 | W. Wu, G. Wang, T. Deng, S. Ægidiu, S. Shanks, V. Modugno, D. Kanoulas, and H. Wang, “Dvn-slam: Dynamic visual neural slam based on local-global encoding,” in 2025 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2025, pp. 14 564–14 571. |
| **DynaMoN** | 2025 | N. Schischka, H. Schieber, M. A. Karaoglu, M. Gorgulu, F. Grötzner, A. Ladikos, N. Navab, D. Roth, and B. Busam, “Dynamon: Motion-aware fast and robust camera localization for dynamic neural radiance fields,” IEEE Robotics and Automation Letters, vol. 10, no. 1, pp. 548–555, 2025. |
| **Bogenberger et al.** | 2026 | B. Bogenberger, O. Harrison, O. Dahanaggamaarachchi, L. Brunke, J. Qian, S. Zhou, and A. P. Schoellig, “Where did i leave my glasses? open-vocabulary semantic exploration in realworld semi-static environments,” IEEE Robotics and Automation Letters, 2026. |

## Scene understanding (not full SLAM)

| System | Year | Paper |
|---|---|---|
| **Kimera** | 2020 | A. Rosinol, M. Abate, Y. Chang, and L. Carlone, “Kimera: an open-source library for real-time metric-semantic localization and mapping,” in 2020 IEEE international conference on robotics and automation (ICRA). IEEE, 2020, pp. 1689–1696. |
| **Hydra** | 2022 | N. Hughes, Y. Chang, and L. Carlone, “Hydra: A real-time spatial perception system for 3D scene graph construction and optimization,” in Robotics: Science and Systems (RSS), 2022. |
| **ConceptGraphs** | 2024 | Q. Gu, A. Kuwajerwala, S. Morin, K. M. Jatavallabhula, B. Sen, A. Agarwal, C. Rivera, W. Paul, K. Ellis, R. Chellappa et al., “Conceptgraphs: Open-vocabulary 3d scene graphs for perception and planning,” in 2024 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2024, pp. 5021–5028. |

## Open problems

| | Problem | Success test |
|---|---|---|
| OP1 | **Calibrated open-vocabulary semantics**: Make semantic confidence calibrated in the sense of (7) under openvocabulary queries, including categories unseen during development. | ECE < 0.05 on held-out classes, maintained after multi-view fusion over ≥500 frames. |
| OP2 | **Submap-native lifelong 3DGS**: Update a 3DGS map across sessions without re-scanning: detect changed regions, update the affected submaps, and keep global consistency. | ≥10 sessions, ≥80% of changed regions detected, ATE within 20% of a single-session baseline, and sub-linear memory growth. |
| OP3 | **Foundation-model-invariant embeddings**: Keep a map built with encoder ϕv queryable after an upgrade to ϕv+1 without re-encoding stored features. | ≥90% of the original open-vocabulary recall across two model upgrades, with an alignment trained on <1000 image pairs. |
| OP4 | **A community open-world benchmark**: Evaluate cross-session consistency, open-vocabulary recall, semantic calibration, and lifetime drift together. | ≥5 environments × ≥5 sessions with controlled changes, ≥30% of categories held out, per-element confidence ground truth, and a public leaderboard. |
| OP5 | **Semantics as an optimization signal**: Make semantic observations factors in (9) that improve geometry over a semantics-ablated baseline. | significant ATE gains on ≥3 sequences, largest under perceptual aliasing, at no more than twice the computational cost. |
| OP6 | **BKI meets neural and Gaussian SLAM**: Combine differentiable-rendering tracking with Bayesian semantic fusion. | ATE competitive with SplaTAM or GS-SLAM on Replica, ECE < 0.10 on its 88 classes, and ≥1 FPS on one GPU. |
| OP7 | **LLM-in-the-loop SLAM**: Let an LLM supply language-grounded priors and exploration directives that feed back into tracking, mapping, and data association. | fewer frames to 90% coverage than frontier-based exploration, better disambiguation of symmetric scenes, and a safe fallback to geometry when the LLM hallucinates. |

## Citation

```bibtex
@misc{canh2026openworld,
  title  = {Open-World Semantic {SLAM}: A Survey on Representations, Uncertainty, and Lifelong Adaptation},
  author = {Canh, Thanh Nguyen and Zhang, Haolan and HoangVan, Xiem and Chong, Nak Young},
  note   = {Preprint},
  year   = {2026}
}
```
