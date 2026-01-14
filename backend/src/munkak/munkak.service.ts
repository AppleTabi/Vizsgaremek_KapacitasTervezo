

@Injectable()
export class MunkakService {
       constructor(private prisma: PrismaService) {}
       async findAll() {
              return this.prisma.munka.findMany();
       }

       async findOne(id: number) {
              return this.prisma.munka.findUnique({ 
                     where: { id } 
              });
       }

       async create(data: CreateMunkaDto) {
              return this.prisma.munka.create({
                     data
              })
       }

       async update(id:number, data: UpdateMunkaDto) {
              return this.prisma.munka.update({
                     where: { id },
                     data
              })
       }

       async delete(id:number) {
              return this.prisma.user.delete({
                     where: { id }
              })
       }

       
}


